import { pipeline, env } from '@xenova/transformers';

// Skip local check for chrome extension environment
env.allowLocalModels = false;
env.useBrowserCache = true;
// Disable multi-threading to avoid blob worker CSP issues in Manifest V3
env.backends.onnx.wasm.numThreads = 1;
env.backends.onnx.wasm.proxy = false;

export class ToxicityDetector {
    private threshold: number;
    private pipe: any = null;
    private loading: Promise<void> | null = null;

    constructor(threshold = 0.8) {
        this.threshold = threshold;
    }

    private async init() {
        if (this.pipe) return;
        if (this.loading) return this.loading;

        this.loading = (async () => {
            try {
                // Use a quantized version of a text classification model often used for toxicity/sentiment
                // Xenova/toxic-bert is a good candidate if available, otherwise distilbert-sst-2-english is a generic fallback testing model
                // For this implementation we'll use a standard sentiment analysis model as a proxy for "negative/toxic" to demonstrate capability
                // since specialized toxicity models can be heavy.
                // Switching to 'Xenova/distilbert-base-uncased-finetuned-sst-2-english' for reliability.
                this.pipe = await pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
                console.log('AI Model loaded successfully');
            } catch (error) {
                console.error('Failed to load AI model:', error);
                throw error;
            } finally {
                this.loading = null;
            }
        })();

        return this.loading;
    }

    async analyze(text: string): Promise<{ isToxic: boolean; score: number }> {
        if (!text || text.trim().length === 0) {
            return { isToxic: false, score: 0 };
        }

        await this.init();

        if (!this.pipe) {
            throw new Error('Model not initialized');
        }

        try {
            // Run inference
            const output = await this.pipe(text);
            // output is key-value [{ label: 'POSITIVE', score: 0.9 }]
            // For SST-2, 'NEGATIVE' is akin to toxic/unwanted in our context for now
            const result = Array.isArray(output) ? output[0] : output;

            const isNegative = result.label === 'NEGATIVE';
            const score = result.score;

            return {
                isToxic: isNegative && score > this.threshold,
                score: isNegative ? score : 0 // Only return score if negative
            };
        } catch (error) {
            console.error('Analysis failed:', error);
            return { isToxic: false, score: 0 };
        }
    }
}

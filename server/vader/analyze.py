# vader/analyze.py

import sys
import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

text = sys.argv[1]
scores = analyzer.polarity_scores(text)

result = {
    "sentiment": "positive" if scores["compound"] >= 0.05 else "negative" if scores["compound"] <= -0.05 else "neutral",
    "compound": scores["compound"],
    "positive": scores["pos"],
    "neutral": scores["neu"],
    "negative": scores["neg"]
}

print(json.dumps(result))

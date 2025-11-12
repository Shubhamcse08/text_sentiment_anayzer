# vader/analyze.py

import sys
import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

if len(sys.argv) < 2:
    print(json.dumps({"error": "No text provided"}))
    sys.exit()
    

text = sys.argv[1]
scores = analyzer.polarity_scores(text)

if scores["compound"] >= 0.05:
    sentiment = "Positive"
elif scores["compound"] <= -0.05:
    sentiment = "Negative"
else:
    sentiment = "Neutral"

result = {
    "text": text,
    "sentiment": sentiment,
    **scores
}

print(json.dumps(result))
sys.stdout.flush()

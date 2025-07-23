# vader/analyze.py
import sys
import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

text = sys.argv[1]
analyzer = SentimentIntensityAnalyzer()
score = analyzer.polarity_scores(text)

result = {
    "text": text,
    "positive": score['pos'],
    "neutral": score['neu'],
    "negative": score['neg'],
    "compound": score['compound'],
    "sentiment": "Positive" if score['compound'] >= 0.05 else "Negative" if score['compound'] <= -0.05 else "Neutral"
}

print(json.dumps(result))

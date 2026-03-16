import requests
import pandas as pd

df = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
df.to_excel("test.xlsx", index=False)

with open("test.xlsx", "rb") as f:
    res = requests.post("http://localhost:8080/upload/file", files={"file": f})
    print(res.status_code)
    print(res.text)

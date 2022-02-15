## HMM

This is a Markov Chain that generates text. There is a version made in JavaScript at [markovchain.surge.sh](https://markovchain.surge.sh) although the Python version is weighted, which will (hopefully) lead to slighly better results. To us the Python version you can either download the file from this repository, or run `pip install hmm_write` in the command line. If you use the pip package, an example of how to use it is below:

```py
from hmm_write import hmm
hmm.write("The quick brown fox jumps over the", 50, 0.3)
```

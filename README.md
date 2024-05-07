# Youngs羊示～加油努力💪～2024～05～06～learning～Webpack5


```

ERROR in [eslint] Invalid Options:
- Unknown options: extensions
- 'extensions' has been removed.

````
[解决办法](https://juejin.cn/post/7359461815376805939)
```
应该是eslint-webpack-plugin还没有适配eslint9，退到8的版本就好了

npm i eslint@8.56.0 -D

```


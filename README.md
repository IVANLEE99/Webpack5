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


```
ERROR in Error with 'static/imgs/7f3cc528.jpg': Expected a `string`, got `object`
```

安装指定版本
```
npm i image-minimizer-webpack-plugin@3.2.3 imagemin@8.0.1 -D
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo@10.0.1 -D
```



## 提交代码校验

[husky 官方文档](https://typicode.github.io/husky/#/)


.husky/pre-commit

pre-commit : 用于检查即将提交的快照，git commit 触发（可通过 ```--no-verify``` 绕过）。


提示
```
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
```

解决方案

```chmod ug+x .husky/*```



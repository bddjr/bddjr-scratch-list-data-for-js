# bddjr-scratch-list-data-for-js

JS实现Scratch原版可用的列表转变量数据格式。  
Use MIT License.  

***

[Scratch实现（点此进入）](https://codingclip.com/editor/4260)  

[Python实现（点此进入）](https://github.com/bddjr/bddjr-scratch-list-data-for-py)  

***

单片数据结构：  
```
<length hex>:<data>
```

当列表有三项时：  
```
<length hex>:<data><length hex>:<data><length hex>:<data>
```

以此类推。  

***
## 运行
请预先安装了nodejs
```
node test.js
```

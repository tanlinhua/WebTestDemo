# Web前端学习记录

## ES6、Javascript、CommonJS、AMD、nodejs的关系与差异

在前端开发中，发现小组成员总是对ES6、Javascript、CommonJS、AMD、nodejs概念搞不清，既不知道它们之间的联系，更不知道它们之间的差异。

理清它们的关系很简单，首先要从最核心的说起，也就是Javascript，javascript是一种脚本编程语言，有自己独立的语法与语义，没有javascript，也就没有其他的那些概念了。

关于ES6，可直接理解为javascript的增强版(增加了新的规范、特性与功能)或最新版，两者之间虽然略有差异，但也可以忽略（不要在意这些细节，呵呵）,就有点类似于JAVA8与JAVA语言的关系，同样既然有ES6，那么也还有ES 5与ES 3，都是Javascript在发展过程中的发布版本。

Commonjs、AMD以及曾经很火的CMD都只是为了解决javascript文件之间的依赖与引用问题，所以它们只是一种Javascript的包管理规范。
在组织你的JS代码时，你完全可以根据自己的喜好，选择合适的包管理规范，但要注意，尽可能只选择一种。

在nodejs出现之前，javascript主要应用于浏览器端，所以nodejs也很好理解了，nodejs是对javascript脱离浏览器的应用延展，它还提供了运行引擎与相关API。
所以nodejs是javascript开发本地应用、服务器应用的一个开发套件，注意了，因为nodejs采用了javascript的语法，所以nodejs不是一种开发语言。

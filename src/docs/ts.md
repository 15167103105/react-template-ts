
接口(Interface)：
  用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
<!-- 情况一 -->
interface IPerson{
  name: string;
  age: number;
}

class Person{
  constructor(public config: IPerson){
  }
}

var p1 = new Person({
  name: 'zhangsan';
  age: 18,
});


<!-- 情况二 -->
interface Animal{
  eat();
}

class Sheet implements Animal{
  eat() {
    console.log('i eat grass');
  }
}


模块：
  模块可以帮助开发者将代码分割成可重用的单元，开发者可以自己决定将模块中的哪些资源（类，方法，变量）暴露出去供外部使用，哪些资源只在模块内使用。

  类型定义文件（*.d.ts）:
    类型定义文件用来帮助开发者在TypeScript中使用已有的JavaScript的工具包
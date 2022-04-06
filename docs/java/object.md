# 对象和类

### 1. 概述

面向对象程序设计是当今主流的程序设计泛型，而面向对象的程序是由对象组成的。

那什么是对象？看看周围真实的世界，会发现身边有很多对象，车，狗，人等等。所有这些对象都有自己的状态和行为。 比如说“狗”，它的状态有：名字、品种、颜色，行为有：叫、摇尾巴和跑。 软件编程中的对象与现实中十分相似，对象的状态就是属性，行为通过方法体现。

而类是构造对象的模板或蓝图。

![img](http://localhost:8081/resources/static/images/blog/Snipaste_2022-01-20_00-53-50.png)  

由类构造对象的过程称为创建类的实例，要构造对象，首先要指定其初试状态，在Java中使用**构造器**来初始化对象。

每个类都有构造方法。如果没有显式地为类定义构造方法，Java 编译器将会为该类提供一个默认构造方法。

在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。

比如我们定义一个简单类时，可以通过下面这种形式

```java
public class Dog{

	private String name;

    public Dog(){
	
    }
 
    public Dog(String name){
        this.name = name// 构造方法
    }
	
	public static void main(String[] args){
      Dog dog = new Dog("xiaohei");
   }
}
```

通过上述代码，我们使用new关键字创建一个对象，这个过程可以分为三步：

- 声明这个对象所属类 Dog 并将该对象变量名起为 dog
- 实例化该对象
- 调用构造函数来对该对象属性进行初始化，如上：name = xiaohei

> 关键词private确保只有Dog类自身的方法能够访问这些字段，其他类的方法不能读写这些字段。

### 2. 访问权限

除了private之外，Java 中一共有四种访问权限控制

**访问权限：** 指的是类及类内部的成员（变量、方法、内部类）对其他类的可见性，即是否允许其他类访问。

| 访问权限  | 本类 | 本包的类 | 子类 | 非子类的外包类 |
| :-------: | :--: | :------: | :--: | :------------: |
|  public   |  是  |    是    |  是  |       是       |
| protected |  是  |    是    |  是  |       否       |
|  default  |  是  |    是    |  否  |       否       |
|  private  |  是  |    否    |  否  |       否       |

- **public：** 所修饰的类、变量、方法，在内外包均具可以访问；
- **protected：** 这个权限是为继承而设计的，protected所修饰的成员，对所有子类是可访问的，对外包的非子类是不可以访问；
- **default：** 只对同包的类具有访问的权限，外包的所有类都不能访问；
- **private：** 私有的权限，只有本类的方法可以使用；



### 3. 对象构造

#### 1. 重载

前面我们简单了解了在构造“狗“(对象)时初始化他的名字，如果我构造对象时想初始化它的名字和年龄，这个时候就需要用到重载了。

如果多个方法有相同的名字,不同的参数便会出现重载

```java
public class Overloading {
    public int test(){
        System.out.println("test1");
    }
    public void test(String name){
        System.out.println("test2");
    }   
    public String test(int age,String name){
        System.out.println("test3");
    }   
}
```

编译器会根据各个方法的返回类型以及参数个数以及类型来判断具体调用哪个方法

#### 2. 无参数构造器

如果设计类的时候没有编写构造函数，系统会默认提供一个无参数构造函数，这个构造器会将所有参数设置为默认值，如数值型数据设置为0，布尔型数据设置为false，如果设计类的时候编写了至少一个构造函数，则不会再提供。

#### 3. 字段初始化

在执行构造器的方法之前，还会进行一个赋值操作，以确保每个字段都有一个有意义的初值，这称为显式字段的初始化。

```java
class Dog{
 private String name= "";
}
```

#### 4. 初始化块

Java中还有提供第三种初始化数据字段的方法：初始化块。初始化块是类的成员之一，每次类创建会隐式调用它，初始化块可分为静态初始化块与普通初始化块，可减少多个构造器内重用的代码。

静态初始化块：

所有的静态字段初始化方法以及静态初始化块都将依照类声明中出现的顺序执行。所以：静态代码块可以用来代替静态字段中很复杂的初始化代码；

```java
static
{
	var generator = (int)(Math.random()*40+1);
	id = generator;
}
```

普通代码块：

```java
{
	System.out.println("我是普通初始化块");
}
```

普通代码块，创建对象时隐式调用

静态代码块，类加载时隐式调用

```java
public class hello {
    public static void main(String[] args) {
        System.out.println(HelloDemo.id);
        new HelloDemo();
    }
}
class HelloDemo{
    static Integer id = 100;
    static
    {
        Integer generator = (int)(Math.random()*40+1);
        id = generator;
        System.out.println("我是静态代码块");
    }
    {
        System.out.println("我是普通代码块");
    }
}
/**
我是静态代码块
4
我是普通代码块
**/
```

1. 








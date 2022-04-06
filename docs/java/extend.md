# 继承

继承是Java面向对象技术的一块基石，它是面向对象最显著的一个特性。继承的基本思想是：可以基于已有的类创建新的类，这样被继承的类叫做父类，子类继承父类的实例和方法使子类具有父类相同的行为。



## 1. 为什么要继承？

先来看两段代码：

```Java
class Person {
         private String name ;
         private int age;
         public void setName(String name) {
                   this.name = name ;
         }
         public void setAge(int age) {
                   this.age = age ;
         }
    	 //省略其他set/get方法....
}
```

```java
class Student {
         private String name ;
         private int age ;
         private String school ;
         public void setName(String name) {
                   this.name = name ;
         }
         public void setAge(int age) {
                   this.age = age ;
         }
		 //省略其他set/get方法....
}
```

通过上面两个类的对比可以清楚的看到，代码中存在大量的复用，造成严重代码冗余

如果两个类存在继承关系，则Student可以继承Person类的方法和变量，在子类中调用父类的方法和变量，就可以解决代码复用的问题。

```java
class Student extend Person {
         private String school ;
         public void setSchool(String school) {
                   this.school = school ;
         }
}
```

关键词**extend**表明正在构造的新类Student派生于一个已存在的类。已存在的类可以称作：父类/超类/基类；新类可以成为子类/派生类。

## 2. 重写

子类在继承父类的同时，也会拥有更多新的功能，而父类中有些方法对子类没有帮助，则可以对父类**允许访问**的方法进行**重写**；

如：

```java
class Person {
    public void life(){
        System.out.println("吃饭....睡觉....");
    }  
}
class Student extend Person {
    public void life(){
        System.out.println("吃饭....睡觉....学习....");
    }  
}
```

重写时要求：**返回值和形参不能改变**

子类其实就是使父类的定义范围更加具体化，父类的表示范围大，子类范围小

## 3. extend的限制

在Java中只允许单继承，一个类最多只能继承一个父类，但是可以被多个类继承。通过implements关键字可以使Java类能够多实现

```java
public interface A {
    public void eat();
    public void sleep();
}
 
public interface B {
    public void show();
}
 
public class C implements A,B {
}
```

另外，通过继承，子类得到了父类的属性和方法，但是对于private（私有），因为访问修饰符的限制,导致在子类中无法直接访问到继承过来的private属性和方法，所以对它们的操作属于隐式继承（间接），对于非private属于显式继承。

```java
//通过set/get方法间接访问private属性
class A{
    private String name = "myname";

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
class B extends A{

}
public class Test {
    public static void main(String[] args) {
        B b = new B();
        System.out.println(b.getName());
    }
}
/**
myname
**/
```

## 4. final

可以利用final关键字声明类不能被继承，即最终类；

如果final用来修饰方法，则表示该方法不能被重写，但是仍然可继承；

```java
//声明类
final class 类名 {
//类体
}

//声明方法
public/private/default/protected  final 返回值类型 方法名(){
//方法体
}
```

final也可用来修饰引用：

- 如果引用为基本数据类型，则该引用为常量，表示该值无法被修改，声明时必须赋值
- 如果引用为引用数据类型，如对象，数组，则本身属性可以修改，但是指向该对象的地址不能修改

## 5. 构造器

在继承中，父类的构造器只能被调用，而不能被继承，调用父类的构造方法要在子类的构造器中使用super,使用super调用构造器的语句必须是子类构造器的第一条语句。

子类会默认调用父类的无参构造器，如果父类没有无参构造器，**并且**子类也没有调用父类的其他构造器，编译器就会报错。顺序为：父类构造函数->子类构造函数

具体如下：

```java
import com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput;

class A{
    private String name = "myname";
    A(String name){
        System.out.println("A1 Constructor....");
    }
    A(){//如果无该构造函数，则报错
        System.out.println("A2 Constructor....");
    }
}

class B extends A{
    B(){
        System.out.println("B Constructor....");
    }
}

public class Test {
    public static void main(String[] args) {
        B b = new B();
    }
}
/**
A2 Constructor....
B Constructor....
**/
```

## 6. 专项真题

**1. 重载和重写的区别**

> 重载就是同样的⼀个⽅法能够根据输⼊数据的不同，做出不同的处理
>
> 重写就是当⼦类继承⾃⽗类的相同⽅法，输⼊数据⼀样，但要做出有别于⽗类的响应时，你就要覆盖⽗类⽅法

**重载：**

发⽣在同⼀个类中，⽅法名必须相同，参数类型不同、个数不同、顺序不同，⽅法返回值和访问修饰符可以不同。重载就是同⼀个类中多个**同名⽅法**根据不同的**传参**来执⾏不同的逻辑处理。

**重写：**

重写发⽣在运⾏期，是⼦类对⽗类的允许访问的⽅法的实现过程进⾏重新编写。

1. 返回值类型、⽅法名、参数列表必须相同，抛出的异常范围⼩于等于⽗类，**访问修饰符范围⼤于等于⽗类**。
2. 再重新表述下返回值：如果⽅法的返回类型是void和基本数据类型，则返回值重写时不可修改。但是如果⽅法的返回值是引⽤类型，重写时是可以返回该引⽤类型的⼦类的
3. 如果⽗类⽅法访问修饰符为 private/final/static 则⼦类就不能重写该⽅法，但是被 static 修饰的⽅法能够被再次声明。
4. 构造⽅法⽆法被重写

综上：重写就是⼦类对⽗类⽅法的重新改造，外部样⼦不能改变，内部逻辑可以改变

**2. 构造器是否可被重写？**

Constructor 不能被继承，子类只能继承非private成员变量和方法，不包括构造器，所以不能 override（重写）,但是可以 overload（重载）,所以你可以看到⼀个类中有多个构造函数的情况。

**3. 在 Java中定义⼀个不做事且没有参数的构造⽅法的作⽤**

Java 程序在执⾏⼦类的构造⽅法之前，如果没有⽤ super() 来调⽤⽗类特定的构造⽅法，则会调⽤⽗类中“没有参数的构造⽅法”。因此，如果⽗类中只定义了有参数的构造⽅法，⽽在⼦类的构造⽅法中⼜没有⽤ super() 来调⽤⽗类中特定的构造⽅法，则编译时将发⽣错误，因为 Java 程序在⽗类中找不到没有参数的构造⽅法可供执⾏。解决办法是在⽗类⾥加上⼀个不做事且没有参数的构造⽅法

**4. 一个类的构造方法的作用是什么？若⼀个类没有声明构造⽅法，该程序能正确执⾏吗? 为什么?**

主要作⽤是完成对类对象的初始化⼯作。可以执⾏。因为⼀个类即使没有声明构造⽅法也会有默认的不带参数的构造⽅法。

**5. 构造方法有哪些特性？**

1. 名字与类名相同。
2. 没有返回值，但不能⽤ void 声明构造函数。
3. ⽣成类的对象时⾃动执⾏，⽆需调⽤。

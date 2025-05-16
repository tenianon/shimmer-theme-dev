package main  // 必须的包声明
import "fmt"  // 导入包

func main() {  // 程序入口
    fmt.Println("Hello, Go!")
}

var a int = 10          // 显式类型声明
var b = "hello"         // 类型推断
c := 3.14               // 短变量声明（函数内）
var x, y int = 1, 2     // 多变量声明
const PI = 3.1415       // 常量

var (
    num int = 42
    flag bool = true
    str string = "Go"
    arr [3]int = [3]int{1,2,3}
    sli []int = []int{1,2}
    m map[string]int = map[string]int{"one":1}
)

// 特殊类型
var c1 complex64 = 3 + 2i
var ptr *int = &num

// if语句
if x := 10; x > 5 {
    fmt.Println(x)
}

// for循环
for i := 0; i < 3; i++ { /*...*/ }
for i, v := range []int{1,2,3} { /*...*/ }

// switch
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("MacOS")
default:
    fmt.Println(os)
}

// 基础函数
func add(a, b int) int {
    return a + b
}

// 多返回值
func swap(a, b string) (string, string) {
    return b, a
}

// 可变参数
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

type Person struct {
    name string
    age  int
}

func (p *Person) SayHello() {
    fmt.Printf("Hi, I'm %s\n", p.name)
}

type Shape interface {
    Area() float64
}

func PrintArea(s Shape) {
    fmt.Println(s.Area())
}

// Goroutine
go func() {
    fmt.Println("Running in goroutine")
}()

// Channel
ch := make(chan int)
go func() { ch <- 42 }()
val := <-ch

if err := someFunc(); err != nil {
    log.Fatal(err)
}

// 自定义错误
if _, err := os.Open("nonexist"); err != nil {
    fmt.Println(err)
}

// 闭包
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

// 反射
t := reflect.TypeOf(42)
fmt.Println(t.Name())  // 输出: int

// defer
func ReadFile() {
    file, _ := os.Open("file.txt")
    defer file.Close()
    // 处理文件...
}
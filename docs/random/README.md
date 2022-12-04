---
sidebarDepth: 3
sidebar: auto
---

# Random

random 随机数生成器包，可以生成随机[]bytes, int, string。

<div STYLE="page-break-after: always;"></div>

## 源码:

- [https://github.com/duke-git/lancet/blob/main/random/random.go](https://github.com/duke-git/lancet/blob/main/random/random.go)

<div STYLE="page-break-after: always;"></div>

## 用法:

```go
import (
    "github.com/duke-git/lancet/v2/random"
)
```

<div STYLE="page-break-after: always;"></div>

## 文档

### RandBytes

<p>生成随机字节切片</p>

<b>函数签名:</b>

```go
func RandBytes(length int) []byte
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	randBytes := random.RandBytes(4)
	fmt.Println(randBytes)
}
```

### RandInt

<p>生成随机int, 范围[min, max)</p>

<b>函数签名:</b>

```go
func RandInt(min, max int) int
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	rInt := random.RandInt(1, 10)
	fmt.Println(rInt)
}
```

### RandString

<p>生成随机给定长度的随机字符串</p>

<b>函数签名:</b>

```go
func RandString(length int) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	randStr := random.RandString(6)
	fmt.Println(randStr)
}
```

### RandUpper

<p>生成给定长度的随机大写字母字符串</p>

<b>函数签名:</b>

```go
func RandUpper(length int) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	randStr := random.RandString(6)
	fmt.Println(randStr) //PACWGF
}
```

### RandLower

<p>生成给定长度的随机小写字母字符串</p>

<b>函数签名:</b>

```go
func RandLower(length int) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	randStr := random.RandLower(6)
	fmt.Println(randStr) //siqbew
}
```

### RandNumeral

<p>生成给定长度的随机数字字符串</p>

<b>函数签名:</b>

```go
func RandNumeral(length int) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	randStr := random.RandNumeral(6)
	fmt.Println(randStr) //035172
}
```

### RandNumeralOrLetter

<p>生成给定长度的随机字符串（数字+字母)</p>

<b>函数签名:</b>

```go
func RandNumeralOrLetter(length int) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	randStr := random.RandNumeralOrLetter(6)
	fmt.Println(randStr) //0aW7cQ
}
```


### UUIdV4

<p>生成UUID v4字符串</p>

<b>函数签名:</b>

```go
func UUIdV4() (string, error)
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/random"
)

func main() {
	uuid, err := random.UUIdV4()
    if err != nil {
        return
    }
	fmt.Println(uuid)
}
```

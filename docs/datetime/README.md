---
sidebarDepth: 3
sidebar: auto
---

# Datetime

datetime 日期时间处理包，格式化日期，比较日期。

<div STYLE="page-break-after: always;"></div>

## 源码:

- [https://github.com/duke-git/lancet/blob/main/datetime/datetime.go](https://github.com/duke-git/lancet/blob/main/datetime/datetime.go)

<div STYLE="page-break-after: always;"></div>

## 用法:

```go
import (
    "github.com/duke-git/lancet/v2/datetime"
)
```

<div STYLE="page-break-after: always;"></div>

## 文档

## 注:

1. 方法 FormatTimeToStr 和 FormatStrToTime 中的 format 参数值需要传以下类型之一：

- yyyy-mm-dd hh:mm:ss
- yyyy-mm-dd hh:mm
- yyyy-mm-dd hh
- yyyy-mm-dd
- yyyy-mm
- mm-dd
- dd-mm-yy hh:mm:ss
- yyyy/mm/dd hh:mm:ss
- yyyy/mm/dd hh:mm
- yyyy-mm-dd hh
- yyyy/mm/dd
- yyyy/mm
- mm/dd
- dd/mm/yy hh:mm:ss
- yyyy
- mm
- hh:mm:ss
- mm:ss

### AddDay

<p>将日期加/减天数</p>

<b>函数签名:</b>

```go
func AddDay(t time.Time, day int64) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
	after2Days := datetime.AddDay(now, 2)
	before2Days := datetime.AddDay(now, -2)

    fmt.Println(after2Days, before2Days)
}
```

### AddHour

<p>将日期加/减小时数</p>

<b>函数签名:</b>

```go
func AddHour(t time.Time, hour int64) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    after2Hours := datetime.AddHour(now, 2)
    before2Hours := datetime.AddHour(now, -2)

    fmt.Println(after2Hours, after2Hours)
}
```

### AddMinute

<p>将日期加/减分钟数</p>

<b>函数签名:</b>

```go
func AddMinute(t time.Time, minute int64) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    after2Minute := datetime.AddMinute(now, 2)
    before2Minute := datetime.AddMinute(now, -2)

    fmt.Println(after2Minute, before2Minute)
}
```

### BeginOfMinute

<p>返回指定时间的分钟开始时间</p>

<b>函数签名:</b>

```go
func BeginOfMinute(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.BeginOfMinute(td)
    fmt.Println(bm) //2022-02-15 15:48:00 +0800 CST
}
```

### BeginOfHour

<p>返回指定时间的小时开始时间</p>

<b>函数签名:</b>

```go
func BeginOfHour(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.BeginOfHour(td)
    fmt.Println(bm) //2022-02-15 15:00:00 +0800 CST
}
```

### BeginOfDay

<p>返回指定时间的当天开始时间</p>

<b>函数签名:</b>

```go
func BeginOfDay(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.BeginOfDay(td)
    fmt.Println(bm) //2022-02-15 00:00:00 +0800 CST
}
```

### BeginOfWeek

<p>返回指定时间的星期开始时间</p>

<b>函数签名:</b>

```go
func BeginOfWeek(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.BeginOfWeek(td)
    fmt.Println(bm) //2022-02-13 00:00:00 +0800 CST
}
```

### BeginOfMonth

<p>返回指定时间的当月开始时间</p>

<b>函数签名:</b>

```go
func BeginOfMonth(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.BeginOfMonth(td)
    fmt.Println(bm) //2022-02-01 00:00:00 +0800 CST
}
```

### BeginOfYear

<p>返回指定时间的当年开始时间</p>

<b>函数签名:</b>

```go
func BeginOfYear(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.BeginOfYear(td)
    fmt.Println(bm) //2022-01-01 00:00:00 +0800 CST
}
```

### EndOfMinute

<p>返回指定时间的分钟结束时间</p>

<b>函数签名:</b>

```go
func EndOfMinute(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.EndOfMinute(td)
    fmt.Println(bm) //2022-02-15 15:48:59.999999999 +0800 CST
}
```

### EndOfHour

<p>返回指定时间的小时结束时间</p>

<b>函数签名:</b>

```go
func EndOfHour(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.EndOfHour(td)
    fmt.Println(bm) //2022-02-15 15:59:59.999999999 +0800 CST
}
```

### EndOfDay

<p>返回指定时间的当天结束时间.</p>

<b>函数签名:</b>

```go
func EndOfDay(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.EndOfDay(td)
    fmt.Println(bm) //2022-02-15 23:59:59.999999999 +0800 CST
}
```

### EndOfWeek

<p>返回指定时间的星期结束时间</p>

<b>函数签名:</b>

```go
func EndOfWeek(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.EndOfWeek(td)
    fmt.Println(bm) //2022-02-19 23:59:59.999999999 +0800 CST
}
```

### EndOfMonth

<p>返回指定时间的月份结束时间</p>

<b>函数签名:</b>

```go
func EndOfMonth(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.EndOfMonth(td)
    fmt.Println(bm) //2022-02-28 23:59:59.999999999 +0800 CST
}
```

### EndOfYear

<p>返回指定时间的年份结束时间</p>

<b>函数签名:</b>

```go
func EndOfYear(t time.Time) time.Time
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    td := time.Date(2022, 2, 15, 15, 48, 40, 112, time.Local)
    bm := datetime.EndOfYear(td)
    fmt.Println(bm) //2022-12-31 23:59:59.999999999 +0800 CST
}
```

### GetNowDate

<p>获取当天日期，返回格式：yyyy-mm-dd</p>

<b>函数签名:</b>

```go
func GetNowDate() string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
	currentDate := datetime.GetNowDate()
    fmt.Println(currentDate) // 2022-01-28
}
```

### GetNowTime

<p>获取当时时间，返回格式：hh:mm:ss</p>

<b>函数签名:</b>

```go
func GetNowTime() string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    currentTime := datetime.GetNowTime()
    fmt.Println(currentDate) // 15:57:33
}
```

### GetNowDateTime

<p>获取当时日期和时间，返回格式：yyyy-mm-dd hh:mm:ss.</p>

<b>函数签名:</b>

```go
func GetNowDateTime() string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    current := datetime.GetNowDateTime()
    fmt.Println(current) // 2022-01-28 15:59:33
}
```

### GetZeroHourTimestamp

<p>获取零时时间戳(timestamp of 00:00).</p>

<b>函数签名:</b>

```go
func GetZeroHourTimestamp() int64
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    zeroTime := datetime.GetZeroHourTimestamp()
    fmt.Println(zeroTime) // 1643299200
}
```

### GetNightTimestamp

<p>获取午夜时间戳(timestamp of 23:59).</p>

<b>函数签名:</b>

```go
func GetNightTimestamp() int64
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    nightTime := datetime.GetNightTimestamp()
    fmt.Println(nightTime) // 1643385599
}
```

### FormatTimeToStr

<p>将日期格式化成字符串，`format` 参数格式参考注<sup>1</sup></p>

<b>函数签名:</b>

```go
func FormatTimeToStr(t time.Time, format string) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "time"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    now := time.Now()
    timeStr := datetime.FormatTimeToStr(now, "yyyy/mm/dd hh:mm:ss")
    fmt.Println(timeStr) //2022/01/28 16:07:44
}
```

### FormatStrToTime

<p>将字符串格式化成时间，`format` 参数格式参考注<sup>1</sup></p>

<b>函数签名:</b>

```go
func FormatStrToTime(str, format string) (time.Time, error)
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    time := datetime.FormatStrToTime("2006-01-02 15:04:05", "yyyy/mm/dd hh:mm:ss")
    fmt.Println(time)
}
```

### NewUnixNow

<p>创建一个当前时间的unix时间戳</p>

<b>函数签名:</b>

```go
type theTime struct {
    unix int64
}
func NewUnixNow() *theTime
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm := datetime.NewUnixNow()
    fmt.Println(tm) //&{1647597438}
}
```

### NewUnix

<p>创建一个unix时间戳</p>

<b>函数签名:</b>

```go
type theTime struct {
    unix int64
}
func NewUnix(unix int64) *theTime
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm := datetime.NewUnix(1647597438)
    fmt.Println(tm) //&{1647597438}
}
```

### NewFormat

<p>创建一个yyyy-mm-dd hh:mm:ss格式时间字符串的unix时间戳</p>

<b>函数签名:</b>

```go
type theTime struct {
    unix int64
}
func NewFormat(t string) (*theTime, error)
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm, err := datetime.NewFormat("2022-03-18 17:04:05")
    fmt.Println(tm) //&{1647594245}
}
```

### NewISO8601

<p>创建一个iso8601格式时间字符串的unix时间戳</p>

<b>函数签名:</b>

```go
type theTime struct {
    unix int64
}
func NewISO8601(iso8601 string) (*theTime, error)
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm, err := datetime.NewISO8601("2006-01-02T15:04:05.999Z")
    fmt.Println(tm) //&{1136214245}
}
```

### ToUnix

<p>返回unix时间戳</p>

<b>函数签名:</b>

```go
func (t *theTime) ToUnix() int64
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm := datetime.NewUnixNow()
    fmt.Println(tm.ToUnix()) //1647597438
}
```

### ToFormat

<p>返回格式'yyyy-mm-dd hh:mm:ss'的日期字符串</p>

<b>函数签名:</b>

```go
func (t *theTime) ToFormat() string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm, _ := datetime.NewFormat("2022-03-18 17:04:05")
    fmt.Println(tm.ToFormat()) //"2022-03-18 17:04:05"
}
```

### ToFormatForTpl

<p>返回tpl格式指定的日期字符串</p>

<b>函数签名:</b>

```go
func (t *theTime) ToFormatForTpl(tpl string) string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm, _ := datetime.NewFormat("2022-03-18 17:04:05")
    ts := tm.ToFormatForTpl("2006/01/02 15:04:05")
    fmt.Println(ts) //"2022/03/18 17:04:05"
}
```

### ToIso8601

<p>返回iso8601日期字符串</p>

<b>函数签名:</b>

```go
func (t *theTime) ToIso8601() string
```

<b>例子:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/datetime"
)

func main() {
    tm, _ := datetime.NewISO8601("2006-01-02T15:04:05.999Z")
    ts := tm.ToIso8601()
    fmt.Println(ts) //"2006-01-02T23:04:05+08:00"
}
```

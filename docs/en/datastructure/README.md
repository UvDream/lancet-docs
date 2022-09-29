---
sidebarDepth: 3
sidebar: auto
---

# List

List is a linear table, implemented with slice.

<div STYLE="page-break-after: always;"></div>

## Source

- [https://github.com/duke-git/lancet/blob/main/datastructure/list/list.go](https://github.com/duke-git/lancet/blob/main/datastructure/list/list.go)

<div STYLE="page-break-after: always;"></div>

## Usage

```go
import (
    list "github.com/duke-git/lancet/v2/datastructure/list"
)
```

<div STYLE="page-break-after: always;"></div>

## Index

- [NewList](#NewList)
- [Contain](#Contain)
- [Data](#Data)
- [ValueOf](#ValueOf)
- [IndexOf](#IndexOf)
- [LastIndexOf](#LastIndexOf)
- [IndexOfFunc](#IndexOfFunc)
- [LastIndexOfFunc](#LastIndexOfFunc)
- [Push](#Push)
- [PopFirst](#PopFirst)
- [PopLast](#PopLast)
- [DeleteAt](#DeleteAt)
- [InsertAt](#InsertAt)
- [UpdateAt](#UpdateAt)
- [Equal](#Equal)
- [IsEmpty](#IsEmpty)
- [Clear](#Clear)
- [Clone](#Clone)
- [Merge](#Merge)
- [Size](#Size)
- [Cap](#Cap)
- [Swap](#Swap)
- [Reverse](#Reverse)
- [Unique](#Unique)
- [Union](#Union)
- [Intersection](#Intersection)
- [SubList](#SubList)
- [DeleteIf](#DeleteIf)

<div STYLE="page-break-after: always;"></div>

## Documentation

### NewList

<p>List is a linear table, implemented with slice.
NewList function return a list pointer</p>

<b>Signature:</b>

```go
type List[T any] struct {
	data []T
}
func NewList[T any](data []T) *List[T]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    fmt.Println(li)
}
```

### Contain

<p>Check if the value in the list or not</p>

<b>Signature:</b>

```go
func (l *List[T]) Contain(value T) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})

    fmt.Println(li.Contain(1)) //true
    fmt.Println(li.Contain(0)) //false
}
```

### Data

<p>Return slice of list data</p>

<b>Signature:</b>

```go
func (l *List[T]) Data() []T
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    data := li.Data()

    fmt.Println(data) //[]int{1, 2, 3}
}
```

### ValueOf

<p>Return the value pointer at index in list</p>

<b>Signature:</b>

```go
func (l *List[T]) ValueOf(index int) (*T, bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    v, ok := li.ValueOf(0)

    fmt.Println(*v) //1
    fmt.Println(ok) //true
}
```

### IndexOf

<p>Returns the index of value in the list. if not found return -1</p>

<b>Signature:</b>

```go
func (l *List[T]) IndexOf(value T) int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})

    fmt.Println(li.IndexOf(1)) //0
    fmt.Println(li.IndexOf(0)) //-1
}
```

### LastIndexOf

<p> Returns the index of the last occurrence of the value in this list if not found return -1</p>

<b>Signature:</b>

```go
func (l *List[T]) LastIndexOf(value T) int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3, 1})

    fmt.Println(li.LastIndexOf(1)) // 3
    fmt.Println(li.LastIndexOf(0)) //-1
}
```

### IndexOfFunc

<p> IndexOfFunc returns the first index satisfying f(v). if not found return -1</p>

<b>Signature:</b>

```go
func (l *List[T]) IndexOfFunc(f func(T) bool) int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})

    fmt.Println(li.IndexOfFunc(func(a int) bool { return a == 1 })) //0
    fmt.Println(li.IndexOfFunc(func(a int) bool { return a == 0 })) //-1
}
```

### LastIndexOfFunc

<p>LastIndexOfFunc returns the index of the last occurrence of the value in this list satisfying f(data[i]). if not found return -1</p>

<b>Signature:</b>

```go
func (l *List[T]) LastIndexOfFunc(f func(T) bool) int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3, 1})

    fmt.Println(li.LastIndexOfFunc(func(a int) bool { return a == 1 })) // 3
    fmt.Println(li.LastIndexOfFunc(func(a int) bool { return a == 0 })) //-1
}
```

### Push

<p>Append value to the list</p>

<b>Signature:</b>

```go
func (l *List[T]) Push(value T)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    li.Push(4)

    fmt.Println(li.Data()) //[]int{1, 2, 3, 4}
}
```

### PopFirst

<p>Delete the first value of list and return it</p>

<b>Signature:</b>

```go
func (l *List[T]) PopFirst() (*T, bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    v, ok := li.PopFirst()

    fmt.Println(*v) //1
    fmt.Println(ok) //true
    fmt.Println(li.Data()) //2, 3
}
```

### PopFirst

<p>Delete the last value of list and return it</p>

<b>Signature:</b>

```go
func (l *List[T]) PopLast() (*T, bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    v, ok := li.PopLast()

    fmt.Println(*v) //3
    fmt.Println(ok) //true
    fmt.Println(li.Data()) //1, 2
}
```

### DeleteAt

<p>Delete the value of list at index, if index is not between 0 and length of list data, do nothing</p>

<b>Signature:</b>

```go
func (l *List[T]) DeleteAt(index int)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3, 4})

    li.DeleteAt(-1)
    fmt.Println(li.Data()) //1,2,3,4

    li.DeleteAt(4)
    fmt.Println(li.Data()) //1,2,3,4

    li.DeleteAt(0)
    fmt.Println(li.Data()) //2,3,4

    li.DeleteAt(2)
    fmt.Println(li.Data()) //2,3
}
```

### InsertAt

<p>Insert value into list at index, if index is not between 0 and length of list data, do nothing</p>

<b>Signature:</b>

```go
func (l *List[T]) InsertAt(index int, value T)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})

    li.InsertAt(-1, 0)
    fmt.Println(li.Data()) //1,2,3

    li.InsertAt(4, 0)
    fmt.Println(li.Data()) //1,2,3

    li.InsertAt(3, 4)
    fmt.Println(li.Data()) //1,2,3,4

    // li.InsertAt(2, 4)
    // fmt.Println(li.Data()) //1,2,4,3
}
```

### UpdateAt

<p>Update value of list at index, index shoud between 0 and list size - 1</p>

<b>Signature:</b>

```go
func (l *List[T]) UpdateAt(index int, value T)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})

    li.UpdateAt(-1, 0)
    fmt.Println(li.Data()) //1,2,3

    li.UpdateAt(2, 4)
    fmt.Println(li.Data()) //1,2,4

    li.UpdateAt(3, 5)
    fmt.Println(li.Data()) //1,2,4
}
```

### Equal

<p>Compare a list to another list, use reflect.DeepEqual on every element</p>

<b>Signature:</b>

```go
func (l *List[T]) Equal(other *List[T]) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li1 := list.NewList([]int{1, 2, 3, 4})
    li2 := list.NewList([]int{1, 2, 3, 4})
    li3 := list.NewList([]int{1, 2, 3})

    fmt.Println(li1.Equal(li2)) //true
    fmt.Println(li1.Equal(li3)) //false
}
```

### IsEmpty

<p>Check if a list is empty or not</p>

<b>Signature:</b>

```go
func (l *List[T]) IsEmpty() bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li1 := list.NewList([]int{1, 2, 3})
    li2 := list.NewList([]int{})

    fmt.Println(li1.IsEmpty()) //false
    fmt.Println(li2.IsEmpty()) //true
}
```

### Clear

<p>Clear the data of list</p>

<b>Signature:</b>

```go
func (l *List[T]) Clear()
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    li.Clear()

    fmt.Println(li.Data()) // empty
}
```

### Clone

<p>Return a copy of list</p>

<b>Signature:</b>

```go
func (l *List[T]) Clone() *List[T]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3})
    cloneList := li.Clone()

    fmt.Println(cloneList.Data()) // 1,2,3
}
```

### Merge

<p>Merge two list, return new list, don't change original list</p>

<b>Signature:</b>

```go
func (l *List[T]) Merge(other *List[T]) *List[T]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li1 := list.NewList([]int{1, 2, 3, 4})
    li2 := list.NewList([]int{4, 5, 6})
    li3 := li1.Merge(li2)

    fmt.Println(li3.Data()) //1, 2, 3, 4, 4, 5, 6
}
```

### Size

<p>Return number of list data items</p>

<b>Signature:</b>

```go
func (l *List[T]) Size() int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3, 4})

    fmt.Println(li.Size()) //4
}
```

### Cap

<p>Cap return cap of the inner data</p>

<b>Signature:</b>

```go
func (l *List[T]) Cap() int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
	data := make([]int, 0, 100)

    li := list.NewList(data)

    fmt.Println(li.Cap()) // 100
}
```

### Swap

<p>Swap the value at two index in list</p>

<b>Signature:</b>

```go
func (l *List[T]) Swap(i, j int)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3, 4})
    li.Swap(0, 3)

    fmt.Println(li.Data()) //4, 2, 3, 1
}
```

### Reverse

<p>Reverse the data item order of list</p>

<b>Signature:</b>

```go
func (l *List[T]) Reverse()
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 3, 4})
    li.Reverse()

    fmt.Println(li.Data()) //4, 3, 2, 1
}
```

### Unique

<p>Remove duplicate items in list</p>

<b>Signature:</b>

```go
func (l *List[T]) Unique()
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li := list.NewList([]int{1, 2, 2, 3, 4})
    li.Unique()

    fmt.Println(li.Data()) //1,2,3,4
}
```

### Union

<p>Creates a new list contain all elements in list l and other, remove duplicate element</p>

<b>Signature:</b>

```go
func (l *List[T]) Union(other *List[T]) *List[T]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li1 := list.NewList([]int{1, 2, 3, 4})
    li2 := list.NewList([]int{4, 5, 6})
    li3 := li1.Union(li2)

    fmt.Println(li3.Data()) //1,2,3,4,5,6
}
```

### Intersection

<p>Creates a new list whose element both be contained in list l and other</p>

<b>Signature:</b>

```go
func (l *List[T]) Intersection(other *List[T]) *List[T]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    li1 := list.NewList([]int{1, 2, 3, 4})
    li2 := list.NewList([]int{4, 5, 6})
    li3 := li1.Intersection(li2)

    fmt.Println(li3.Data()) //4
}
```

### SubList

<p>SubList returns a sub list of the original list between the specified fromIndex, inclusive, and toIndex, exclusive.</p>

<b>Signature:</b>

```go
func (l *List[T]) SubList(fromIndex, toIndex int) *List[T]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
    l := list.NewList([]int{1, 2, 3, 4, 5, 6})

    fmt.Println(l.SubList(2, 5)) // []int{3, 4, 5}
}
```

### DeleteIf

<p>DeleteIf delete all satisfying f(data[i]), returns count of removed elements</p>

<b>Signature:</b>

```go
func (l *List[T]) DeleteIf(f func(T) bool) int
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    list "github.com/duke-git/lancet/v2/datastructure/list"
)

func main() {
	l := list.NewList([]int{1, 1, 1, 1, 2, 3, 1, 1, 4, 1, 1, 1, 1, 1, 1})

	fmt.Println(l.DeleteIf(func(a int) bool { return a == 1 })) // 12
	fmt.Println(l.Data()) // []int{2, 3, 4}
}
```

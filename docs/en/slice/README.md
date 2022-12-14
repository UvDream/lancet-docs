---
sidebarDepth: 3
sidebar: auto
---

# Slice

Package slice implements some functions to manipulate slice.

<div STYLE="page-break-after: always;"></div>

## Source:

- [https://github.com/duke-git/lancet/blob/main/slice/slice.go](https://github.com/duke-git/lancet/blob/main/slice/slice.go)

<div STYLE="page-break-after: always;"></div>

## Usage:

```go
import (
    "github.com/duke-git/lancet/v2/slice"
)
```

<div STYLE="page-break-after: always;"></div>

## Documentation

### AppendIfAbsent

<p>If slice doesn't contain the value, append it to the slice.</p>

<b>Signature:</b>

```go
func AppendIfAbsent[T comparable](slice []T, value T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	strs := []string{"a", "b"}
	res1 := slice.AppendIfAbsent(strs, "a")
	fmt.Println(res1) //[]string{"a", "b"}

	res2 := slice.AppendIfAbsent(strs, "cannot")
	fmt.Println(res2"}
}
```

### Contain

<p>Check if the value is in the slice or not.</p>

<b>Signature:</b>

```go
func Contain[T comparable](slice []T, value T) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res := slice.Contain([]string{"a", "b", "c"}, "a")
	fmt.Println(res) //true
}
```

### ContainSubSlice

<p>Check if the slice contain subslice or not.</p>

<b>Signature:</b>

```go
func ContainSubSlice[T comparable](slice, subslice []T) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res := slice.ContainSubSlice([]string{"a", "b", "c"}, []string{"a", "b"})
	fmt.Println(res) //true
}
```

### Chunk

<p>Creates an slice of elements split into groups the length of `size`.</p>

<b>Signature:</b>

```go
func Chunk[T any](slice []T, size int) [][]T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	arr := []string{"a", "b", "c", "d", "e"}
	res := slice.Chunk(InterfaceSlice(arr), 3)
	fmt.Println(res) //[][]any{{"a", "b", "c"}, {"d", "e"}}
}
```

### Compact

<p>Creates an slice with all falsey values removed. The values false, nil, 0, and "" are falsey.</p>

<b>Signature:</b>

```go
func Compact[T any](slice []T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res := slice.Compact([]int{0, 1, 2, 3})
	fmt.Println(res) //[]int{1, 2, 3}
}
```

### Concat

<p>Creates a new slice concatenating slice with any additional slices and/or values.</p>

<b>Signature:</b>

```go
func Concat[T any](slice []T, values ...[]T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res1 := slice.Concat([]int{1, 2, 3}, 4, 5)
	fmt.Println(res1) //[]int{1, 2, 3, 4, 5}

	res2 := slice.Concat([]int{1, 2, 3}, []int{4, 5})
	fmt.Println(res2) //[]int{1, 2, 3, 4, 5}
}
```

### Count

<p>Count iterates over elements of slice, returns a count of all matched elements.</p>

<b>Signature:</b>

```go
func Count[T any](slice []T, predicate func(index int, t T) bool) int
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 4, 5, 6}
	evenFunc := func(i, num int) bool {
		return (num % 2) == 0
	}

	res := slice.Count(nums, evenFunc)
	fmt.Println(res) //3
}
```

### Difference

<p>Creates an slice of whose element not included in the other given slice.</p>

<b>Signature:</b>

```go
func Difference[T comparable](slice, comparedSlice []T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s1 := []int{1, 2, 3, 4, 5}
	s2 := []int{4, 5, 6}

	res := slice.Difference(s1, s2)
	fmt.Println(res) //[]int{1, 2, 3}
}
```

### DifferenceBy

<p>DifferenceBy accepts iteratee func which is invoked for each element of slice and values to generate the criterion by which they're compared.</p>

<b>Signature:</b>

```go
func DifferenceBy[T comparable](slice []T, comparedSlice []T, iteratee func(index int, item T) T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s1 := []int{1, 2, 3, 4, 5}
	s2 := []int{4, 5, 6}
	addOne := func(i int, v int) int {
		return v + 1
	}

	res := slice.DifferenceBy(s1, s2, addOne)
	fmt.Println(res) //[]int{1, 2}
}
```

### DifferenceWith

<p>DifferenceWith accepts comparator which is invoked to compare elements of slice to values. The order and references of result values are determined by the first slice.</p>

<b>Signature:</b>

```go
func DifferenceWith[T any](slice []T, comparedSlice []T, comparator func(value, otherValue T) bool) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s1 := []int{1, 2, 3, 4, 5}
	s2 := []int{4, 5, 6, 7, 8}
	isDouble := func(v1, v2 int) bool {
		return v2 == 2*v1
	}

	res := slice.DifferenceWith(s1, s2, isDouble)
	fmt.Println(res) //[]int{1, 5}
}
```

### DeleteAt

<p>Delete the element of slice from start index to end index - 1.</p>

<b>Signature:</b>

```go
func DeleteAt[T any](slice []T, start int, end ...int)
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res1 := slice.DeleteAt([]string{"a", "b", "c", "d", "e"}, 3)
	fmt.Println(res1) //[]string{"a", "b", "c", "e"}

	res2 := slice.DeleteAt([]string{"a", "b", "c", "d", "e"}, 0, 2)
	fmt.Println(res2) //[]string{"c", "d", "e"}

}
```

### Drop

<p>Creates a slice with `n` elements dropped from the beginning when n > 0, or `n` elements dropped from the ending when n < 0.</p>

<b>Signature:</b>

```go
func Drop[T any](slice []T, n int) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res1 := slice.Drop([]int{}, 0)
	fmt.Println(res1) //[]int{}

	res2 := slice.Drop([]int{1, 2, 3, 4, 5}, 1)
	fmt.Println(res2) //[]int{2, 3, 4, 5}

	res3 := slice.Drop([]int{1, 2, 3, 4, 5}, -1)
	fmt.Println(res3) //[]int{1, 2, 3, 4}
}
```

### Equal

<p>Check if two slices are equal: the same length and all elements' order and value are equal.</p>

<b>Signature:</b>

```go
func Equal[T comparable](slice1, slice2 []T) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	slice1 := []int{1, 2, 3}
	slice2 := []int{1, 2, 3}
	slice3 := []int{3, 2, 1}

	res1 := slice.Equal(slice1, slice2)
	res2 := slice.Equal(slice1, slice3)

	fmt.Println(res1) //true
	fmt.Println(res2) //false
}
```

### EqualWith

<p>Check if two slices are equal with comparator func.</p>

<b>Signature:</b>

```go
func EqualWith[T, U any](slice1 []T, slice2 []U, comparator func(T, U) bool) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	slice1 := []int{1, 2, 3}
	slice2 := []int{2, 4, 6}

	isDouble := func(a, b int) bool {
		return b == a*2
	}

	res := slice.EqualWith(slice1, slice2, isDouble)

	fmt.Println(res) //true
}
```

### Every

<p>Return true if all of the values in the slice pass the predicate function.</p>

<b>Signature:</b>

```go
func Every[T any](slice []T, predicate func(index int, item T) bool) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 5}
	isEven := func(i, num int) bool {
		return num%2 == 0
	}

	res := slice.Every(nums, isEven)
	fmt.Println(res) //false
}
```

### Filter

<p>Return all elements which match the function.</p>

<b>Signature:</b>

```go
func Filter[T any](slice []T, predicate func(index int, item T) bool) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 5}
	isEven := func(i, num int) bool {
		return num%2 == 0
	}

	res := slice.Filter(nums, isEven)
	fmt.Println(res) //[]int{2, 4}
}
```

### Find

<p>Iterates over elements of slice, returning the first one that passes a truth test on function.</p>

<b>Signature:</b>

```go
func Find[T any](slice []T, predicate func(index int, item T) bool) (*T, bool)
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 5}
	isEven := func(i, num int) bool {
		return num%2 == 0
	}

	res, ok := slice.Find(nums, even)
	fmt.Println(res) //2
	fmt.Println(ok) //true
}
```

### FindLast

<p>iterates over elements of slice from end to begin, returning the last one that passes a truth test on function.</p>

<b>Signature:</b>

```go
func FindLast[T any](slice []T, predicate func(index int, item T) bool) (*T, bool)
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 5}
	isEven := func(i, num int) bool {
		return num%2 == 0
	}

	res, ok := slice.FindLast(nums, even)
	fmt.Println(res) //4
	fmt.Println(ok) //true
}
```

### Flatten

<p>Flatten slice with one level.</p>

<b>Signature:</b>

```go
func Flatten(slice any) any
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	arr := [][][]string{{{"a", "b"}}, {{"c", "d"}}}
	res := slice.Flatten(arr)
	fmt.Println(res) //{{"a", "b"}, {"c", "d"}}
}
```

### FlattenDeep

<p>flattens slice recursive.</p>

<b>Signature:</b>

```go
func FlattenDeep(slice any) any
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	arr := [][][]string{{{"a", "b"}}, {{"c", "d"}}}
	res := slice.FlattenDeep(arr)
	fmt.Println(res) //{"a", "b", "c", "d"}
}
```

### ForEach

<p>Iterates over elements of slice and invokes function for each element.</p>

<b>Signature:</b>

```go
func ForEach[T any](slice []T, iteratee func(index int, item T))
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	numbers := []int{1, 2, 3, 4, 5}
	var numbersAddTwo []int
	slice.ForEach(numbers, func(index int, value int) {
		numbersAddTwo = append(numbersAddTwo, value+2)
	})
	fmt.Println(numbersAddTwo) //[]int{3, 4, 5, 6, 7}
}
```

### GroupBy

<p>Iterates over elements of the slice, each element will be group by criteria, returns two slices.</p>

<b>Signature:</b>

```go
func GroupBy[T any](slice []T, groupFn func(index int, item T) bool) ([]T, []T)
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 4, 5, 6}
	evenFunc := func(i, num int) bool {
		return (num % 2) == 0
	}
	even, odd := slice.GroupBy(nums, evenFunc)

	fmt.Println(even) //[]int{2, 4, 6}
	fmt.Println(odd) //]int{1, 3, 5}
}
```

### GroupWith

<p>Return a map composed of keys generated from the results of running each element of slice thru iteratee.</p>

<b>Signature:</b>

```go
func GroupWith[T any, U comparable](slice []T, iteratee func(T) U) map[U][]T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []float64{6.1, 4.2, 6.3}
	floor := func(num float64) float64 {
		return math.Floor(num)
	}
	res := slice.GroupWith(nums, floor)
	fmt.Println(res) //map[float64][]float64{ 4: {4.2}, 6: {6.1, 6.3},}
}
```

### IntSlice

<p>Convert interface slice to int slice.</p>

<b>Signature:</b>

```go
func IntSlice(slice any) []int
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	var nums = []any{1, 2, 3}
	res := slice.IntSlice(nums)
	fmt.Println(res) //[]int{1, 2, 3}
}
```

### InterfaceSlice

<p>Convert value to interface slice.</p>

<b>Signature:</b>

```go
func InterfaceSlice(slice any) []any
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	var nums = []int{}{1, 2, 3}
	res := slice.InterfaceSlice(nums)
	fmt.Println(res) //[]any{1, 2, 3}
}
```

### Intersection

<p>Creates a slice of unique values that included by all slices.</p>

<b>Signature:</b>

```go
func Intersection[T comparable](slices ...[]T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s1 := []int{1, 2, 2, 3}
	s2 := []int{1, 2, 3, 4}
	res := slice.Intersection(s1, s2),

	fmt.Println(res) //[]int{1, 2, 3}
}
```

### InsertAt

<p>insert the element into slice at index.</p>

<b>Signature:</b>

```go
func InsertAt[T any](slice []T, index int, value any) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s := []string{"a", "b", "c"}

	res1, _ := slice.InsertAt(s, 0, "1")
	fmt.Println(res1) //[]string{"1", "a", "b", "c"}

	res2, _ := slice.InsertAt(s, 3, []string{"1", "2", "3"})
	fmt.Println(res2) //[]string{"a", "b", "c", "1", "2", "3"}
}
```

### IndexOf

<p>Returns the index at which the first occurrence of a value is found in a slice or return -1 if the value cannot be found.</p>

<b>Signature:</b>

```go
func IndexOf[T comparable](slice []T, value T) int
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	arr := []string{"a", "a", "b", "c"}
	res1 := slice.IndexOf(arr, "a")
	fmt.Println(res1) //0

	res2 := slice.IndexOf(arr, "d")
	fmt.Println(res2) //-1
}
```

### LastIndexOf

<p>Returns the index at which the last occurrence of a value is found in a slice or return -1 if the value cannot be found.</p>

<b>Signature:</b>

```go
func LastIndexOf[T comparable](slice []T, value T) int
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	arr := []string{"a", "a", "b", "c"}
	res1 := slice.LastIndexOf(arr, "a")
	fmt.Println(res1) //1

	res2 := slice.LastIndexOf(arr, "d")
	fmt.Println(res2) //-1
}
```

### Map

<p>Creates an slice of values by running each element in slice thru function.</p>

<b>Signature:</b>

```go
func Map[T any, U any](slice []T, iteratee func(index int, item T) U) []U
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 4}
	multiplyTwo := func(i, num int) int {
		return num * 2
	}
	res := slice.Map(nums, multiplyTwo)
	fmt.Println(res) //[]int{2, 4, 6, 8}
}
```

### Reverse

<p>Reverse the elements order in slice.</p>

<b>Signature:</b>

```go
func Reverse[T any](slice []T)
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 4}
	slice.Reverse(nums)
	fmt.Println(res) //[]int{4, 3, 2, 1}
}
```

### Reduce

<p>Reduce slice.</p>

<b>Signature:</b>

```go
func Reduce[T any](slice []T, iteratee func(index int, item1, item2 T) T, initial T) T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 4}
	reduceFunc := func(i, v1, v2 int) int {
		return v1 + v2
	}
	res := slice.Reduce(nums, reduceFunc, 0)
	fmt.Println(res) //10
}
```

### Shuffle

<p>Creates an slice of shuffled values.</p>

<b>Signature:</b>

```go
func Shuffle[T any](slice []T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 4, 5}
	res := slice.Shuffle(nums)
	fmt.Println(res) //3,1,5,4,2
}
```

### SortByField

<p>Sort struct slice by field. Slice element should be struct, field type should be int, uint, string, or bool. Default sort type is ascending (asc), if descending order, set sortType to desc</p>

<b>Signature:</b>

```go
func SortByField(slice any, field string, sortType ...string) error
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	type student struct {
		name string
		age  int
	}
	students := []student{
		{"a", 10},
		{"b", 15},
		{"c", 5},
		{"d", 6},
	}
	err := slice.SortByField(students, "age", "desc")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(students)
	// []students{
	// 	{"b", 15},
	// 	{"a", 10},
	// 	{"d", 6},
	// 	{"c", 5},
	// }
}
```

### Some

<p>Return true if any of the values in the list pass the predicate function.</p>

<b>Signature:</b>

```go
func Some[T any](slice []T, predicate func(index int, item T) bool) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	nums := []int{1, 2, 3, 5}
	isEven := func(i, num int) bool {
		return num%2 == 0
	}

	res := slice.Some(nums, isEven)
	fmt.Println(res) //true
}
```

### StringSlice

<p>Convert interface slice to string slice.</p>

<b>Signature:</b>

```go
func StringSlice(slice any) []string
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	var s = []any{"a", "b", "c"}
	res := slice.StringSlice(s)
	fmt.Println(res) //[]string{"a", "b", "c"}
}
```

### SymmetricDifference

<p>Create a slice whose element is in given slices, but not in both slices.</p>

<b>Signature:</b>

```go
func SymmetricDifference[T comparable](slices ...[]T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s1 := []int{1, 2, 3}
	s2 := []int{1, 2, 4}
	s3 := []int{1, 2, 3, 5}

	fmt.Println(slice.SymmetricDifference(s1)) //[]int{1, 2, 3}
	fmt.Println(slice.SymmetricDifference(s1, s2)) //[]int{3, 4}
	fmt.Println(slice.SymmetricDifference(s1, s2, s3)) //[]int{3, 4, 5}
}
```

### ToSlice

<p>Returns a slices of a variable parameter transformation</p>

<b>Signature:</b>

```go
func ToSlice[T any](value ...T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res := slice.ToSlice("a", "b")
	fmt.Println(res) //{"a", "b"}
}
```

### ToSlicePointer

<p>Returns a pointer to the slices of a variable parameter transformation</p>

<b>Signature:</b>

```go
func ToSlicePointer[T any](value ...T) []*T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	str1 := "a"
	str2 := "b"
	res := slice.ToSlicePointer(str1, str2)
	fmt.Println(res) // res -> []*string{&str1, &str2}
}
```

### Unique

<p>Remove duplicate elements in slice.</p>

<b>Signature:</b>

```go
func Unique[T comparable](slice []T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res := slice.Unique([]int{1, 2, 2, 3})
	fmt.Println(res) //[]int{1, 2, 3}
}
```

### UniqueBy

<p>Call iteratee func with every item of slice, then remove duplicated.</p>

<b>Signature:</b>

```go
func UniqueBy[T comparable](slice []T, iteratee func(item T) T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/slice"
)

func main() {
	res := slice.UniqueBy([]int{1, 2, 3, 4, 5, 6}, func(val int) int {
		return val % 4
	})
	fmt.Println(res) //[]int{1, 2, 3, 0}
}
```

### Union

<p>Creates a slice of unique values, in order, from all given slices. using == for equality comparisons.</p>

<b>Signature:</b>

```go
func Union[T comparable](slices ...[]T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s1 := []int{1, 3, 4, 6}
	s2 := []int{1, 2, 5, 6}
	res := slice.Union(s1, s2)

	fmt.Println(res) //[]int{1, 3, 4, 6, 2, 5}
}
```

### UpdateAt

<p>Update the slice element at index. if param index < 0 or index >= len(slice), will return error. </p>

<b>Signature:</b>

```go
func UpdateAt[T any](slice []T, index int, value T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	s := []string{"a", "b", "c"}

	res1, _ := slice.UpdateAt(s, 0, "1")
	fmt.Println(res1) //[]string{"1", "b", "c"}
}
```

### Without

<p>Creates a slice excluding all given values. </p>

<b>Signature:</b>

```go
func Without[T comparable](slice []T, values ...T) []T
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/slice"
)

func main() {
	res := slice.Without([]int{1, 2, 3, 4, 5}, 1, 2)
	fmt.Println(res) //[]int{3, 4, 5}
}
```

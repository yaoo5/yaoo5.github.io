# 正则表达式

正则表达式是一种用于匹配和操作文本的强大工具，它常常是最被我们忽略的一个知识点，本文将如何快速掌握正则表达式。

## 基础知识

:::tip 

这部分不必死记硬背，知道哪个地方可以用哪个知识，忘记了查资料即可。

:::

### 普通字符

| 字符     | 描述                                                                                |
| ------ | --------------------------------------------------------------------------------- |
| \d     | 匹配任意一个阿拉伯数字（0 到 9）。等价于 [0-9]                                                      |
| \w     | 匹配字母、数字、下划线。等价于 [A-Za-z0-9_]                                                      |
| .      | 匹配除换行符（\n、\r）之外的任何单个字符，相等于 [^\n\r]。                                               |
| [\s\S] | 匹配所有。\s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行。                                              |
| [A-Z]  | [A-Z] 表示一个区间，匹配所有大写字母，[a-z] 表示所有小写字母。                                             |
| [ABC]  | 匹配 [...] 中的所有字符，例如 [aeiou] 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母。          |
| [^ABC] | 匹配除了 [...] 中字符的所有字符，例如 [^aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字符。 |

### 特殊字符

| 特殊字符 | 描述                                                                                 |
| ---- | ---------------------------------------------------------------------------------- |
| ^    | 匹配输入字符串的开始位置，除非在方括号表达式中使用，当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合。要匹配 ^ 字符本身，请使用 \^。    |
| $    | 匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 \$ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。 |
| ( )  | 标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。                                |
| .    | 匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用\\\. 。                                                |
| ?    | 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \?。                                        |

### 限定符

| 字符    | 描述                                                 |
| ----- | ---------------------------------------------------------------------------------------------------------- |
| *     | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于 {0,}。     |
| +     | 匹配前面的子表达式一次或多次。例如，zo+ 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。  |
| ?     | 匹配前面的子表达式零次或一次。例如，do(es)? 可以匹配 "do" 、 "does"、 "doxy" 中的 "do" 和 "does"。? 等价于 {0,1}。   |
| \{n\}   | n 是一个非负整数。匹配确定的 n 次。例如，o{2} 不能匹配 "Bob" 中的 o，但是能匹配 "food" 中的两个 o。  |
| \{n,\}  | n 是一个非负整数。至少匹配n 次。例如，o{2,} 不能匹配 "Bob" 中的 o，但能匹配 "foooood" 中的所有 o。o{1,} 等价于 o+。o{0,} 则等价于 o*。 |
| \{n,m\} | m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。例如，o{1,3} 将匹配 "fooooood" 中的前三个 o。o{0,1} 等价于 o?。请注意在逗号和两个数之间不能有空格。 |

## 正则利器

::: tip 尤雨溪推荐的工具
工具只推荐一个正则可视化工具，[https://regexp.com](https://regexp.com)。
:::

**举例**

这里有个正则 `/(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/`，来看看**[https://regexp.com](https://regexp.com)** 解析的结果。

![](/tech/images/regexp_result.png)

**一般我用 [https://regexp.com](https://regexp.com) 来分析看不懂的正则，或者确认正则写的是否正确。**

## 练习题 

:::warning Talk is cheap, show me the code.
掌握了基础知识和工具的使用，不实践也是**事倍功半**，所以这里提供了一些练习给大家。
:::

### 1. 千分符处理

<<< @/codes/regexp.ts#millimeter-problem{markdown}

:::details 点击展开
<<< @/codes/regexp.ts#millimeter-code{2}
:::

### 2. 美元人民币兑换
<<< @/codes/regexp.ts#exchange-problem{markdown}

:::details 点击展开
<<< @/codes/regexp.ts#exchange-code{2}
:::

### 3. 时间提取

<<< @/codes/regexp.ts#date-problem{markdown}

:::details 点击展开
<<< @/codes/regexp.ts#date-code{2}
:::

> 暂时就列举这么多，大家有有意思的也可以提PR。

## 挑战
最后放两段 [vuejs源码](https://github.com/vuejs/vue/blob/main/src/compiler/parser/html-parser.ts) 里的正则，大家可以尝试分析看看。

```JavaScript
/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
```

```JavaScript
/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
```

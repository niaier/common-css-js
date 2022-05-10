# common-css

## 安装
```
npm install common-css-js
```

### 引用
```
import 'common-css-js'
```

### 使用

**间距**

------

**property** 应用间距类型:

{property}{direction}-{size}

- `m` - 应用 `margin`

- `p` - 应用 `padding`

**direction** 指定了该属性所应用的侧边:

- `t` - 应用 `margin-top` 和 `padding-top` 的间距
- `b` - 应用 `margin-bottom` 和 `padding-bottom` 的间距
- `l` - 应用 `margin-left` 和 `padding-left` 的间距
- `r` - 应用 `margin-right` 和 `padding-right` 的间距
- `x` - 应用 `*-left` 和 `*-right` 的间距
- `y` - 应用 `*-top` 和 `*-bottom` 的间距
- `a` - 在所有方向应用该间距

**size** 以1px增量控制间距属性:

最大100

- `0` - 通过设置为 `0` 来消除所有 `margin` 或 `padding`.
- `1` - 设置 `margin` 或 `padding` 为 1px

示例

```html
<div class="ml-10"></div>
<div class="pl-10"></div>
```



**浮动**

------

- **.float-left**
- **.float-right**
- **.float-none**
- **.float-inherit**
- **.float-inline-start**
- **.float-inline-end**

示例

```html
<div class="float-left"></div>
```



**定位**

------

mode:定位方式
position-{mode}

- absolute
- fixed
- relative
- static
- inherit

 偏移

 {direction}-{size}

direction:方向
size:偏移尺寸 最大100

示例

```html
<div class="position-absolute left-10"></div>
```


# Style scss

# 오늘내로 기초 스타일 잡아서 scss 올리겠습니당!

> 사용하실 scss 파일 안에서 `@import '<index.scss폴더>`

## constant 폴더

### z-index 관리

---

```scss
$gnb-level: 50;
$story-avatar-border-level: 5;
$story-avatar-level: 10;
```

**사용 예**

```scss
.global-nav-bar {
  @include flexbox(start, center);
  position: fixed;
  z-index: $gnb-level;
  top: 0;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid $border;
  background-color: $white;
}
```

### color 관리

---

```scss
$black: #262626;  root 검정색
$white: #fff;     root 하얀색
$gray: #8e8e8e;   댓글이나 placeholder 같은곳에 쓰이는 회색
$red: #ed4956;    하트에 사용되는 red
$blue: #0094f6;   button primary 색상 (로그인버튼 등)
$background: #fafafa;
$border: #dbdbdb; border에 자주 사용되는 색상
```

**사용 예**

```scss
.search-input-wrapper {
  @include flexbox(start, center);
  width: 215px;
  height: 28px;
  padding: 12px;
  border: 1px solid $border;
  border-radius: 3px;
  background-color: $background;
}
```

## mixin 폴더

### flexbox

> flex에서 써야 하는 3개 (`display` || `align-items` || `justify-conent`) 를 한줄에 사용하기 위해 만든 `Mixin`

**Name**

- flexbox(jc, ai)
- inline-flexbox(jc, ai)
- column-flexbox(jc, ai)

**인자로 받는 값**  
인자로 아무것도 넘겨주지 않을 시 **center, center 정렬**이 됩니다.  
인자로는 **start, end, between, around, stretch, center** 가 들어 올 수 있습니다.

```scss
$flex-map: (
  start: flex-start,
  end: flex-end,
  between: space-between,
  around: space-around,
  stretch: stretch,
  center: center,
);
```

**사용 예**

```scss
.search-input-wrapper {
  @include flexbox(center, center);
  width: 215px;
  height: 28px;
  padding: 12px;
  border: 1px solid $border;
  border-radius: 3px;
  background-color: $background;
}
```

### position

> position이 **absolute나 fixed**일 때 가운데 정렬을 해야 할 일이 많습니다.  
> 정렬을 쉽게 하기 위해 만든 Mixin이나, position은 absolute와 fixed만 사용 가능합니다.

**Name**

- pos-center-x(positionType) :: x축 가운데 정렬
- pos-center-y(positionType) :: y축 가운데 정렬
- pos-center(positionType) ::

**인자로 받는 값**  
position 값을 받습니다.  
position은 **absolute**와 **fixed**만 사용 가능합니다.

**사용 예**

```scss
.avatar.is-active::after {
  @include pos-center(absolute);
  content: '';
  width: 26px;
  height: 26px;
  border: 2px solid $gray;
  border-radius: 50%;
}
```

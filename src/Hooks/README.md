## How to use

> **useFetch** has one parameter.
> url 과 method를 object 형태로 보내면 됩니다.

### 사용법

```jsx
const {
  loading: isProductLoading,
  data: productsData,
  error: productsError,
  refetch,
} = useFetch({ url: api.products });
```

**return**

> return { ...state, refetch };

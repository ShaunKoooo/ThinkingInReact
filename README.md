# functional component 與 class component 之間的差異
**functional component capture the rendered values**
    
***
## 情境：
按下 Follow 按鈕，三秒內更換下拉選單的值，觀察class 與 functional component 的變化

結果：
class 的 alert 會抓到新的值，而 function 的 alert 會是舊的值。

原因：React 中的 props 是 immutable 的，而 this 永遠是 mutable 的！
settimeout 內 this 改變了，class 會抓到最新的 this.props。

    immutable：
      物件被創造出來後，值無法改變。即若值有異動，會增開新記憶體儲存。
    mutable：
      物件被創造出來後，值可以被改變。即值有異動，改相同記憶體之變數。

解決：
1. 在事件函式之前捕捉 this.props (不推)
```js
const {user} = this.props;
```
2. 閉包，render 時 capture the props
```js
render() {
    // Capture the props!
    const props = this.props;

    // Note: we are *inside render*.
    // These aren't class methods.
    const showMessage = () => {
      alert('Followed ' + props.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow</button>;
  }
```

主要差異：
functional component 的事件會綁定當下的 props 與 state！！！

### 若要 functional component 實現讀取最新的 state 可用 useRef Hook + useEffect 達成。


***
# 參考資料
[1. The difference between functional component and class component](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)

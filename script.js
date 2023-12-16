document.getElementById("form").addEventListener(
  "submit",(e)=>{
    const a=[[0,0,0],[0,0,0],[0,0,0]];
    a[0][0] = a11.value * b11.value + a12.value * b21.value + a13.value * b31.value;
    a[0][1] = a11.value * b12.value + a12.value * b22.value + a13.value * b32.value;
    a[0][2] = a11.value * b13.value + a12.value * b23.value + a13.value * b33.value;
    a[1][0] = a21.value * b11.value + a22.value * b21.value + a23.value * b31.value;
    a[1][1] = a21.value * b12.value + a22.value * b22.value + a23.value * b32.value;
    a[1][2] = a21.value * b13.value + a22.value * b23.value + a23.value * b33.value;
    a[2][0] = a31.value * b11.value + a32.value * b21.value + a33.value * b31.value;
    a[2][1] = a31.value * b12.value + a32.value * b22.value + a33.value * b32.value;
    a[2][2] = a31.value * b13.value + a32.value * b23.value + a33.value * b33.value;
    
    result.innerHTML = `<input type="text" value="${a[0][0]}">
    <input type="text" value="${a[0][1]}">
    <input type="text" value="${a[0][2]}"><br>
    <input type="text" value="${a[1][0]}">
    <input type="text" value="${a[1][1]}">
    <input type="text" value="${a[1][2]}"><br>
    <input type="text" value="${a[2][0]}">
    <input type="text" value="${a[2][1]}">
    <input type="text" value="${a[2][2]}">`;
    e.preventDefault();
  })
// フォームの簡単なバリデーション
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    alert('名前とメールアドレスを入力してください');
    return false;
  }
  return true; // actionで指定したページへ遷移
}

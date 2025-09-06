// وظيفة نسخ النص عند الضغط على الزر
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("تم نسخ: " + text);
  });
}

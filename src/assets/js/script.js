// リセットCSS（kiso.css）は style.scss で読み込み。二重読み込みを避けるためここでは import しない
import "./_drawer.js";
import "./_mv-slider.js";
import "./_viewport.js";
import "./_works-filter.js";

// ヘッダーとトップスクロールボタンのスクロール制御
const footer = document.querySelector('.p-footer');

window.addEventListener('scroll', () => {
  const header = document.querySelector('.p-header');
  const toTop = document.querySelector('.js-to-top');
  const isScrolled = window.scrollY > 500;

  // 500pxスクロールでクラスを付与
  if (header) {
    header.classList.toggle('is-scrolled', isScrolled);
  }

  // トップボタンの表示制御
  if (toTop) {
    toTop.classList.toggle('is-show', isScrolled);

    // フッターエリアに入ったら文字色をベースカラーへ切り替え
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      // ボタン円の上端（bottom:50px + height:100px → viewport下から150px）より
      // フッターが上に来たタイミングで切り替える
      const buttonTop = window.innerHeight - 150;
      toTop.classList.toggle('is-on-footer', footerTop < buttonTop);
    }
  }
}, { passive: true });

// トップスクロールボタンのクリックイベント
document.querySelector('.js-to-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 開発環境でのみCSSをインポート（JS経由でスタイルを注入）
if (import.meta.env.DEV) {
  import("../styles/style.scss");
}

<template><div><h2 id="carbon-и-bazel" tabindex="-1"><a class="header-anchor" href="#carbon-и-bazel"><span>Carbon и Bazel</span></a></h2>
<p>Carbon - Молодой экспериментальный язык программирования,
разрабатываемый группой Google как преемник C++. На момент
написания справочника проект находится в активной разработке, поэтому
установка требует использования исходного кода из репозитория
и сборки через систему Bazel.</p>
<h2 id="предварительные-требования" tabindex="-1"><a class="header-anchor" href="#предварительные-требования"><span>Предварительные требования</span></a></h2>
<p>Перед установкой убедитесь, что на вашей системе есть:</p>
<ul>
<li><code v-pre>Git</code></li>
<li><code v-pre>Bazel</code></li>
<li><code v-pre>Python</code></li>
<li><code v-pre>Clang\LLVM</code></li>
</ul>
<p>Для Linux/MacOS также понадобиться:</p>
<p>-<code v-pre>cmake</code>, <code v-pre>ninja-build</code>, <code v-pre>libstdc++-12-dev</code> (на Ubuntu/Debian)</p>
<h2 id="cпособ-первыи-установка-carbon-через-toolchain-bazel" tabindex="-1"><a class="header-anchor" href="#cпособ-первыи-установка-carbon-через-toolchain-bazel"><span>Cпособ первый: Установка Carbon через toolchain bazel</span></a></h2>
<h3 id="клонируем-репозитории" tabindex="-1"><a class="header-anchor" href="#клонируем-репозитории"><span>Клонируем репозиторий</span></a></h3>
<p>Откройте терминал:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone https://github.com/carbon-language/carbon-lang</span>
<span class="line"><span class="token builtin class-name">cd</span> carbon-lang</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="сборка-toolchain-через-bazel" tabindex="-1"><a class="header-anchor" href="#сборка-toolchain-через-bazel"><span>Сборка toolchain через Bazel</span></a></h3>
<ul>
<li>toolchain, это все библиотеки для работы над Carbon</li>
</ul>
<p>Из корневой папки проекта запустите сборку через Bazel:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">bazel build //<span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Это может занять несколько минут. После успешной сборки, вы получите исполняемые файлы,
с помощью которых можно запускать Carbon-lang</p>
<h3 id="проверка-работоспособности-через-bazel" tabindex="-1"><a class="header-anchor" href="#проверка-работоспособности-через-bazel"><span>Проверка работоспособности через Bazel</span></a></h3>
<p>Тут вы проверите, что сам Carbon работает под капотом.
Если что-то не работает, он вам об этом скажет.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">bazel <span class="token builtin class-name">test</span> //<span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>И так, если у вас все отлично работает, можете переходить к главе <a href="/handbook/getting-started/structure">Hello, World!</a></p>
<h2 id="cпособ-второи-установка-carbon-напрямую-с-исполняемыми-фаилами" tabindex="-1"><a class="header-anchor" href="#cпособ-второи-установка-carbon-напрямую-с-исполняемыми-фаилами"><span>Cпособ второй: Установка Carbon напрямую с исполняемыми файлами</span></a></h2>
<h3 id="заходим-в-репозитории-carbon-с-архивом" tabindex="-1"><a class="header-anchor" href="#заходим-в-репозитории-carbon-с-архивом"><span>Заходим в <a href="https://github.com/carbon-language/carbon-lang" target="_blank" rel="noopener noreferrer">репозиторий Carbon</a> с архивом</span></a></h3>
<p>Здесь нужно будет найти <code v-pre>Realises</code> вкладку: Скачайте Realise-версию Carbon</p>
<p>Во вкладке <code v-pre>Realises</code> будет предложено скачать архив-версию,
например, <code v-pre>carbon_toolchain-x.x.x-x.nightly.year.month.day</code>.
Осталось дело замалым: Скачиваем, распаковываем.</p>
<h3 id="проверка-работоспособности" tabindex="-1"><a class="header-anchor" href="#проверка-работоспособности"><span>Проверка работоспособности</span></a></h3>
<p>В распакованном архиве будет две папки: bin и lib.</p>
<ul>
<li>в bin находится запуск Carbon компилятора</li>
<li>в lib находится все библиотеки, для работы Carbon</li>
</ul>
<p>Нам нужна только папка bin: Заходим в нее <code v-pre>cd ./bin</code>. И так,
теперь, мы видим наш компилятор. Он запускается командой для Linux</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">./carbon</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Вы можете попробовать его запустить просто так. Сюда мы будем прокидывать
файлы для компиляции используя <code v-pre>carbon</code> компилятор прямо из этой папки.</p>
<h2 id="заключение" tabindex="-1"><a class="header-anchor" href="#заключение"><span>Заключение</span></a></h2>
<p>В виду того, что сейчас Carbon в активной стадии разработки,
способы разработки и установки его, буквально напрямую. Потому, мы не запускаем
установщик: Потому что изначально, его каждый день обновляют, обновляют и обновляют. Пока
нет стабильной версии Carbon, но в ближайшее время мы увидим свет</p>
</div></template>



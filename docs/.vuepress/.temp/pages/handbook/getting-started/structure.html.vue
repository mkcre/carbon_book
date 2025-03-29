<template><div><h1 id="hello-world-и-структура-проекта" tabindex="-1"><a class="header-anchor" href="#hello-world-и-структура-проекта"><span>Hello, World! и структура проекта</span></a></h1>
<h2 id="структура-проекта" tabindex="-1"><a class="header-anchor" href="#структура-проекта"><span>Структура проекта</span></a></h2>
<p>После того, как мы <a href="/handbook/getting-started/installation">установили</a> Carbon, мы можем преступить к работе.
Запишите в <code v-pre>hello_world.carbon</code> следующий синтаксис:</p>
<div class="language-Carbon line-numbers-mode" data-highlighter="prismjs" data-ext="Carbon"><pre v-pre><code><span class="line">// Определение пакета (обязательный элемент)</span>
<span class="line">package Hello api;</span>
<span class="line"></span>
<span class="line">// Main - точка входа в программу</span>
<span class="line">fn Main() -&gt; i32 {</span>
<span class="line">  Print(&quot;Hello, World!&quot;);</span>
<span class="line">  return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="запуск-кода" tabindex="-1"><a class="header-anchor" href="#запуск-кода"><span>Запуск кода</span></a></h2>
<p>У нас есть два варианта, но мы будем использовать самый простой и более рабочий, чем
Bazel и его ребята.</p>
<p>И так, заходим в папку с нашим проектом:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> ~/proj/hello_world</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Теперь, чтобы не было путаницы я объясню на пальцах:</p>
<ul>
<li>Мой файл hello_world.carbon лежит по пути <code v-pre>~/proj/hello_world/hello_world.carbon</code></li>
<li>Мой компилятор carbon'а лежит по пути <code v-pre>~/libs/carbon-nightly/bin/carbon</code></li>
</ul>
<p>И так, в нашей папке с проектом прописываем следующее:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">~/libs/carbon-nightly/carbon <span class="token function">link</span> <span class="token parameter variable">--output</span><span class="token operator">=</span>hello_world hello_world.o</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Остановимся поподробнее, что тут происходит.
Нам нужно запустить компилятор, чтобы он запустил наш файл:
Мы берем <code v-pre>hello_world.carbon</code> и создаём
<code v-pre>link</code>, тем самым превращая наш файл в С-версию <code v-pre>hello_world.o</code>. Теперь, можете
посмотреть <code v-pre>ls</code> наш файл <code v-pre>hello_world.o</code>.</p>
<p>Теперь, мы можем запустить и увидеть вывод:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">./hello_world</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>На экран должно вывестись следующее:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">Hello, World<span class="token operator">!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="запуск-через-bazel" tabindex="-1"><a class="header-anchor" href="#запуск-через-bazel"><span>Запуск через Bazel</span></a></h2>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
</div></template>



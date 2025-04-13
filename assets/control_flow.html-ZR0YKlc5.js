import{_ as n,c as s,b as a,o as i}from"./app-CaOWfZII.js";const l={};function r(c,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h2 id="управление-состоянием" tabindex="-1"><a class="header-anchor" href="#управление-состоянием"><span>Управление состоянием</span></a></h2><p>Управление потоком позволяет контролировать порядок выполнения инструкций в программе.</p><h3 id="условные-операторы-if-и-else" tabindex="-1"><a class="header-anchor" href="#условные-операторы-if-и-else"><span>Условные операторы: <code>if</code> и <code>else</code></span></a></h3><p>Оператор if проверяет условие и выполняет блок кода, если оно истинно.</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">if (условие) {</span>
<span class="line">	// код, если истинно</span>
<span class="line">} else if {</span>
<span class="line">	// другое условие</span>
<span class="line">} else {</span>
<span class="line">	// если все ложны</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="цикл-while" tabindex="-1"><a class="header-anchor" href="#цикл-while"><span>Цикл <code>while</code></span></a></h3><p>Выполняет лок кода, пока условие истинно:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">var counter: i32 = 0</span>
<span class="line">while (counter &lt; 5) {</span>
<span class="line">	Print(counter);</span>
<span class="line">	counter += 1;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="цикл-for" tabindex="-1"><a class="header-anchor" href="#цикл-for"><span>Цикл <code>for</code></span></a></h3><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">for (var i: i32 = 0; i &lt; 5; i++) {</span>
<span class="line">	Print(i);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Для работы с коллекциями может применяться применяться упрощенный формат:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">for (var item in array) {</span>
<span class="line">	Print(item);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break-и-continue" tabindex="-1"><a class="header-anchor" href="#break-и-continue"><span><code>break</code> и <code>continue</code></span></a></h3><p><code>break</code> немедленно завершает цикл:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">while (true) {</span>
<span class="line">  if (condition) {</span>
<span class="line">    break;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>continue</code> переходит к следующей интеграции:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">for (var i in 0..10) {</span>
<span class="line">	if (i % 2 == 0) {</span>
<span class="line">		continue;</span>
<span class="line">	}</span>
<span class="line">	Print(i);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="возврат-значения-return" tabindex="-1"><a class="header-anchor" href="#возврат-значения-return"><span>Возврат значения: <code>return</code></span></a></h3><p>Завершает выполнение функции и возвращает результат:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn multiply(a: i32, b: i32) -&gt; i32 {</span>
<span class="line">	return a * b;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если функция не возвращает значение (<code>void</code>), <code>return</code> можно использовать без аргументов:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn logMessage(msg: String) {</span>
<span class="line">	if (msg.isEmpty()) {</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	Print(msg);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Итог</p><p>Особенности Carbon:</p><ul><li>Фигурные скобки {} обязательны для блоков кода, даже если они содержат одну инструкцию.</li><li>Условия в <code>if</code> и <code>while</code> всегда заключаются в кругле скобки <code>()</code>.</li><li>Типизация строгая: все переменные и возвращаемые значения должны иметь явно указанный тип.</li></ul>`,25)]))}const t=n(l,[["render",r]]),p=JSON.parse('{"path":"/handbook/common-concepts/control_flow.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1744346668000,"contributors":[{"name":"Kuroi","username":"Kuroi","email":"fantom_play13@mail.ru","commits":1,"url":"https://github.com/Kuroi"},{"name":"mkcre","username":"mkcre","email":"99949382+mkcre@users.noreply.github.com","commits":2,"url":"https://github.com/mkcre"}],"changelog":[{"hash":"1c6014391be4f768698569b14ef8108b29cb485c","time":1744346668000,"email":"99949382+mkcre@users.noreply.github.com","author":"mkcre","message":"Update control_flow.md"},{"hash":"85f8f258c04e16d6708514d1eaebeaa21241d266","time":1744346250000,"email":"99949382+mkcre@users.noreply.github.com","author":"mkcre","message":"Update control_flow.md"},{"hash":"d3708e4e0b4794b9c2d30db0f5c1cbd23b5a5de8","time":1743220336000,"email":"fantom_play13@mail.ru","author":"Kuroi","message":"init"}]},"filePathRelative":"handbook/common-concepts/control_flow.md"}');export{t as comp,p as data};

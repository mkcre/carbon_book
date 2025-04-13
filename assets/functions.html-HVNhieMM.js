import{_ as s,c as e,b as a,o as i}from"./app-CSmQ_ObF.js";const l={};function r(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h3 id="функции-functions-в-carbon" tabindex="-1"><a class="header-anchor" href="#функции-functions-в-carbon"><span>Функции (Functions) в Carbon</span></a></h3><p>Функции — это основные строительные блоки программ на Carbon. Они позволяют структурировать код, повторно использовать логику и изолировать задачи. Вот ключевые аспекты работы с функциями:</p><hr><h4 id="_1-объявление-функции" tabindex="-1"><a class="header-anchor" href="#_1-объявление-функции"><span>1. <strong>Объявление функций</strong></span></a></h4><p>Функции объявляются с использованием ключевого слова <code>fn</code>. Синтаксис:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn имя_функции(параметры) -&gt; возвращаемый_тип {</span>
<span class="line">    // Тело функции</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Пример:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn add(a: i32, b: i32) -&gt; i32 {</span>
<span class="line">    return a + b;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="_2-параметры-и-аргументы" tabindex="-1"><a class="header-anchor" href="#_2-параметры-и-аргументы"><span>2. <strong>Параметры и аргументы</strong></span></a></h4><ul><li>Параметры указываются в формате <code>имя: тип</code>.</li><li>Передача по значению (по умолчанию) или по ссылке (с использованием <code>&amp;</code>):<div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn increment(x: &amp;i32) -&gt; i32 {</span>
<span class="line">    return *x + 1;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><strong>Значения по умолчанию</strong> (если поддерживаются):<div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn greet(name: String = &quot;Гость&quot;) -&gt; String {</span>
<span class="line">    return &quot;Привет, {name}!&quot;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h4 id="_3-возвращаемые-значения" tabindex="-1"><a class="header-anchor" href="#_3-возвращаемые-значения"><span>3. <strong>Возвращаемые значения</strong></span></a></h4><ul><li>Указывается после <code>-&gt;</code>. Если функция не возвращает значение, тип опускается:<div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn logMessage(text: String) {</span>
<span class="line">    Print(text);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><strong>Ключевое слово <code>return</code></strong>: <ul><li>Если <code>return</code> отсутствует, функция возвращает результат последнего выражения в блоке:<div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn square(x: i32) -&gt; i32 {</span>
<span class="line">    x * x // Неявный возврат</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><hr><h4 id="_4-область-видимости" tabindex="-1"><a class="header-anchor" href="#_4-область-видимости"><span>4. <strong>Область видимости</strong></span></a></h4><ul><li>Функции объявляются на уровне модуля или внутри структур/классов.</li><li><strong>Вложенные функции</strong> (если поддерживаются):<div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn outer() {</span>
<span class="line">    fn inner() { // Функция внутри outer</span>
<span class="line">        Print(&quot;Вложенная&quot;);</span>
<span class="line">    }</span>
<span class="line">    inner();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h4 id="_5-перегрузка-функции-overloading" tabindex="-1"><a class="header-anchor" href="#_5-перегрузка-функции-overloading"><span>5. <strong>Перегрузка функций (Overloading)</strong></span></a></h4><p>Carbon не поддерживает перегрузку функций на уровне имени. Для разных сигнатур используются уникальные имена:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn multiplyInt(a: i32, b: i32) -&gt; i32 { ... }</span>
<span class="line">fn multiplyFloat(a: f64, b: f64) -&gt; f64 { ... }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="_6-методы-функции-структур-и-классов" tabindex="-1"><a class="header-anchor" href="#_6-методы-функции-структур-и-классов"><span>6. <strong>Методы (Функции структур и классов)</strong></span></a></h4><p>Функции могут быть привязаны к типам данных (например, структурам):</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">struct Vector {</span>
<span class="line">    x: f64,</span>
<span class="line">    y: f64,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">impl Vector {</span>
<span class="line">    fn length(self) -&gt; f64 {</span>
<span class="line">        return Math.sqrt(self.x * self.x + self.y * self.y);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Использование:</span>
<span class="line">let vec = Vector { x: 3.0, y: 4.0 };</span>
<span class="line">Print(vec.length()); // 5.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="_7-обработка-ошибок" tabindex="-1"><a class="header-anchor" href="#_7-обработка-ошибок"><span>7. <strong>Обработка ошибок</strong></span></a></h4><p>Вместо исключений часто используется тип <code>Result&lt;T, E&gt;</code> (как в разделе Data Types):</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn parseNumber(s: String) -&gt; Result&lt;i32, String&gt; {</span>
<span class="line">    // Попытка преобразования строки в число</span>
<span class="line">    if (s.isNumeric()) {</span>
<span class="line">        return Result.Ok(s.to_i32());</span>
<span class="line">    } else {</span>
<span class="line">        return Result.Err(&quot;Ошибка преобразования&quot;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="_8-рекурсия" tabindex="-1"><a class="header-anchor" href="#_8-рекурсия"><span>8. <strong>Рекурсия</strong></span></a></h4><p>Carbon поддерживает рекурсивные вызовы:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn factorial(n: i32) -&gt; i32 {</span>
<span class="line">    if (n &lt;= 1) {</span>
<span class="line">        return 1;</span>
<span class="line">    }</span>
<span class="line">    return n * factorial(n - 1);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="_9-анонимные-функции-лямбды" tabindex="-1"><a class="header-anchor" href="#_9-анонимные-функции-лямбды"><span>9. <strong>Анонимные функции (Лямбды)</strong></span></a></h4><p>Если Carbon поддерживает лямбда-выражения, синтаксис может быть похож на:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">let sum = fn (a: i32, b: i32) -&gt; i32 { a + b };</span>
<span class="line">Print(sum(2, 3)); // 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="_10-точка-входа-функция-main" tabindex="-1"><a class="header-anchor" href="#_10-точка-входа-функция-main"><span>10. <strong>Точка входа: функция <code>main</code></strong></span></a></h4><p>Программа начинается с выполнения <code>main</code>:</p><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">fn main() -&gt; {</span>
<span class="line">    Print(&quot;Запуск программы&quot;);</span>
<span class="line">    let result = add(5, 3);</span>
<span class="line">    Print(result); // 8</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="особенности-функции-в-carbon" tabindex="-1"><a class="header-anchor" href="#особенности-функции-в-carbon"><span>Особенности функций в Carbon:</span></a></h4><ul><li><strong>Четкая типизация</strong>: Все параметры и возвращаемые значения имеют явные типы.</li><li><strong>Иммутабельность по умолчанию</strong>: Параметры передаются как константы, если не указано иное (например, через <code>&amp;mut</code> для изменяемых ссылок).</li><li><strong>Нет неявных преобразований</strong>: Типы аргументов должны точно совпадать с ожидаемыми.</li></ul><hr><h4 id="пример-комплекснои-функции" tabindex="-1"><a class="header-anchor" href="#пример-комплекснои-функции"><span>Пример комплексной функции:</span></a></h4><div class="language-carbon line-numbers-mode" data-highlighter="prismjs" data-ext="carbon"><pre><code><span class="line">// Расчет среднего значения массива</span>
<span class="line">fn average(values: [f64]) -&gt; Option&lt;f64&gt; {</span>
<span class="line">    if (values.isEmpty()) {</span>
<span class="line">        return Option.none();</span>
<span class="line">    }</span>
<span class="line">    var sum: f64 = 0.0;</span>
<span class="line">    for (var v in values) {</span>
<span class="line">        sum += v;</span>
<span class="line">    }</span>
<span class="line">    return Option.some(sum / values.size());</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>Функции в Carbon сочетают гибкость с безопасностью, что делает их мощным инструментом для создания надежных приложений.</p>`,49)]))}const t=s(l,[["render",r]]),p=JSON.parse('{"path":"/handbook/common-concepts/functions.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1744552918000,"contributors":[{"name":"mkcre","username":"mkcre","email":"99949382+mkcre@users.noreply.github.com","commits":1,"url":"https://github.com/mkcre"}],"changelog":[{"hash":"63b5b25301828e60f9fe38b50de41e390b072537","time":1744552918000,"email":"99949382+mkcre@users.noreply.github.com","author":"mkcre","message":"Update deploy.yaml"}]},"filePathRelative":"handbook/common-concepts/functions.md"}');export{t as comp,p as data};

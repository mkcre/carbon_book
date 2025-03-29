# Hello, World! и структура проекта


## Структура проекта

После того, как мы [установили][installation] Carbon, мы можем преступить к работе.
Запишите в `hello_world.carbon` следующий синтаксис:

```Carbon
// Определение пакета (обязательный элемент)
package Hello api;

// Main - точка входа в программу
fn Main() -> i32 {
  Print("Hello, World!");
  return 0;
}
```

## Запуск кода

У нас есть два варианта, но мы будем использовать самый простой и более рабочий, чем
Bazel и его ребята.

И так, заходим в папку с нашим проектом: 

```bash
cd ~/proj/hello_world
```

Теперь, чтобы не было путаницы я объясню на пальцах:

- Мой файл hello_world.carbon лежит по пути `~/proj/hello_world/hello_world.carbon`
- Мой компилятор carbon'а лежит по пути `~/libs/carbon-nightly/bin/carbon`

И так, в нашей папке с проектом прописываем следующее:

```bash
~/libs/carbon-nightly/carbon link --output=hello_world hello_world.o
```

Остановимся поподробнее, что тут происходит. 
Нам нужно запустить компилятор, чтобы он запустил наш файл:
Мы берем `hello_world.carbon` и создаём 
`link`, тем самым превращая наш файл в С-версию `hello_world.o`. Теперь, можете
посмотреть `ls` наш файл `hello_world.o`.

Теперь, мы можем запустить и увидеть вывод:
```bash
./hello_world
```

На экран должно вывестись следующее:

```bash
Hello, World!
```

## Запуск через Bazel

## 







[installation]: /handbook/getting-started/installation

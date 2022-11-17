
## Описание предметной области "Поликлиника"

В связи с тем, что темпы современной жизни, как и население планеты, возрастают с каждым годом, повышается объем работ с информацией для персонала различных государственных учреждений. При этом имеется необходимость в следующих аспектах:

•	  быстрое и качественное обслуживание;

•	  быстрая работа с данными;

•	  увеличение персонала и числа учреждений, соответствующее росту населения;

•	  доступность данных.

Следовательно, будет целесообразно создать систему, которая позволит персоналу какого-либо заведения упростить работу. Наличие баз данных в городской больнице позволит решить многие вопросы, такие как:

•	скорость обслуживания – отсутствие бумажной волокиты и наличие электронного устройства с доступом в Интернет позволит увеличить скорость работы с данными и избавиться от очередей;

•	улучшение качества работы врачей – в связи с тем, что отпадет необходимость в заполнении лишних бумаг у врачей будет больше возможностей уделять пациентам;

•	доступность данных – при походе в другое учреждение пациенту не нужно будет забирать свою медицинскую карту из больницы, достаточно просто показать ее на сайте; врачи и медсестры смогут работать и следить за состоянием пациентов дистанционно;

•	удобство работы с данными – наличие связанных между собой баз данных позволит легко их дополнять или редактировать;

•	сохранность данных – срок хранения существенно возрастает по сравнению с бумажными носителями информации.

Целью данной работы будет создание системы для автоматизации ключевых бизнес-процессов городской больницы города. Преимущества данной системы заключаются в следующем:

•	простота освоения и использования технологии (для этого достаточно иметь минимальные навыки пользования ПК или мобильным устройством и наличие сети Internet);

•	доступность (просмотр или редактура доступны из любого места с любого устройства, при наличии интернета);

•	удобность администрирования (сайт и базу данных можно хранить на локальном сервере, расположенном в больнице);

•	наглядность;

•	обновление в реальном времени (если в карту внесены изменения, они тут же отобразятся у пациента, нет необходимости в постоянном ее получении);

•	отсутствие очередей в регистратуру.

## BPMN модель

1. Первым этапом получаем информацию о пациенте.

  1.1. если нет мед карты, то оформляем карту и заносим в бд пациента.

2. Запись

  2.1. Если на сегодняшнее число, то проверяем свободен ли врач принять пациента сегодня. 

2.2. Если нет, то согласуем определенную дату с пациентом.

3. Уведомление пациента о приёме смс сообщением. 

4. Прием.

4.1. Если пациент не пришел, то врач передает информацию в регистратуру. 

4.2. Пациент пришел, врач получает описание симптомов и делает первичный осмотр. 

4.3. Проверка наличия анализов. 

4.4. Если результатов нет, то выписывается направление на сдачу анализов. 

4.5. Если есть, то ставится диагноз и выписывается рецепт. 

4.6. Информация о текущем состоянии пациента. Если состояние нестабильно, то происходит госпитализация. Если стабильно, то согласуется дата повторного приема

5. Повторный прием. 

5.1. Если симптомов больше нет, то завершается прием. 

5.2. Если симптомы остались, то выписываются другие лекарства или направление к другому врачу. 

![image](https://user-images.githubusercontent.com/105455288/195443322-f88ab562-f88c-4d66-9516-d81791e1f6c1.png)
<h1 align="center">Рисунок 1 - BPMN модель

## IDEF1X модель

![image](https://user-images.githubusercontent.com/105455288/198161486-d8d5ea06-23c5-479b-b7dc-185c269a2c9f.png)
                                                            Рисунок 2 - IDEF1X модель

## USE case диаграмма

Диаграмма вариантов использования. Диаграмма, отражающая отношения между актерами и прецедентами и являющаяся составной частью модели прецедентов, позволяющей описать систему на концептуальном уровне

![image](https://user-images.githubusercontent.com/105455288/198170222-aeb18de6-a736-4367-9e1c-f909d8af9fce.png)
                                                            Рисунок 3 - Диаграмма вариантов использования


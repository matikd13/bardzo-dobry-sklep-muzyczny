@startuml orderSeq
Actor Użytkownik as user
(Uwierzytelnienie) as auth
(Złożenie zamówienia) as cOrder
(Obsługa płatności) as proc
Actor "Obsługa sklepu" as shop
(Obsługa zamówienia) as pOrder

user -> auth
auth -> cOrder
cOrder -> proc
cOrder --> shop
pOrder <- shop
user <-- pOrder : Wysyłka, jeżeli opłacone


@enduml

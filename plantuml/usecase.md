@startuml usecase
left to right direction
actor Klient as client
actor "Obsługa sklepu" as seller

rectangle "Bardzo Dobry Sklep Muzyczny" {
    client -- (Przeglądanie produktów) 
    client -- (Kupno produktu) : Realizacja płatności
    client -- (Wyszukiwanie produktu) 
    client -- (Śledzenie zamówienia)
    client -- (Uwierzytelnianie)

    (Zarządzanie produktami) -- seller
    (Realizacja zamówień) -- seller
    (Uwierzytelnianie) -- seller

    (Realizacja płatności) ..> (Realizacja zamówień) 
}
@enduml
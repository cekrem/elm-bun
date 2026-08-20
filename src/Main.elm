module Main exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html)
import Html.Attributes as Attr
import Html.Events as Events


main : Program () Int Msg
main =
    Browser.sandbox { init = 0, update = update, view = view }


type Msg
    = Increment
    | Decrement


update : Msg -> number -> number
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


view : Int -> Html Msg
view model =
    Html.div
        [ Attr.class "grid"
        , Attr.class "h-screen"
        , Attr.class "place-content-center"
        , Attr.class "text-8xl text-center"
        , Attr.class "bg-gray-100"
        ]
        [ Html.h1
            [ Attr.class "p-2"
            , Attr.class "bg-red-300"
            , Attr.class "rounded"
            ]
            [ Html.text "Bun and Elm are Friends!" ]
        , Html.button [ Events.onClick Decrement ] [ Html.text "-" ]
        , Html.div [] [ Html.text (String.fromInt model) ]
        , Html.button [ Events.onClick Increment ] [ Html.text "+" ]
        ]

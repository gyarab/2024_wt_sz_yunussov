from time import sleep
from turtle import goto, shape, hideturtle

coordinates = [
    (0, 100),
    (100, 100),
    (100, 0),
    (0, 0),
    (100, 100),
    (50, 150),
    (0, 100),
    (100, 0)
]
shape("turtle")

for c in coordinates:
    goto(c)

sleep(1)
hideturtle()

sleep(5)

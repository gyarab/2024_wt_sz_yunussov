from time import sleep
from turtle import goto, shape, right, hideturtle

coordinates = [
    (100, 0),
    (100, -200),
    (-100, -200),
    (-100, 0)
]
shape("turtle")

for i in range(4):
    goto(coordinates[i])
    right(90)

goto(100, 0)
right(-135)
goto(0, 100)
right(-90)
goto(-100, 0)

right(-90)
goto(100, -200)
right(135)
goto(-100, -200)
right(135)
goto(100, 0)

sleep(1)
hideturtle()

sleep(5)

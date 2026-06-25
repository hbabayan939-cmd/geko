name = input("Մուտքագրեք անունը: ")
surname = input("Մուտքագրեք ազգանունը: ")
age = input("Մուտքագրեք տարիքը: ")

print("Անուն:", name)
print("Ազգանուն:", surname)
print("Տարիք:", age)

salary = int(input("Մեկ օրվա աշխատավարձը: "))
days = int(input("Աշխատած օրերի քանակը: "))

total_salary = salary * days

print(total_salary)

password = input("Մուտքագրեք գաղտնաբառը: ")

if len(password) >= 8:
    print("Վավեր գաղտնաբառ")
else:
    print("Անվավեր գաղտնաբառ")

login = input("Login: ")
password = input("Password: ")

if login == "admin" and password == "1234":
    print("Մուտքը հաջողվեց")
else:
    print("Մուտքը ձախողվեց")

price = int(input("Մուտքագրեք գինը: "))

if price > 10000:
    price = price * 0.9

print(int(price))

wins = int(input("Հաղթանակների քանակը: "))
draws = int(input("Ոչ-ոքիների քանակը: "))

points = wins * 3 + draws

print(points)

distance = float(input("Անցած ճանապարհը (կմ): "))
fuel = float(input("Ծախսը (լ/100 կմ): "))

need_fuel = distance * fuel / 100

print(need_fuel)

item_price = int(input("Ապրանքի գինը: "))
count = int(input("Քանակը: "))

total_price = item_price * count

print(total_price)

tasks = ["Python", "React", "Sport", "Read", "Sleep"]

for task in tasks:
    print(task)

sales = [12000, 15000, 8000, 22000]

total_sales = sum(sales)

print(total_sales)
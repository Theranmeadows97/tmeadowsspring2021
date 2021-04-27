def add_machine(n):
    if n < 1:
        return 0
    else: 
        return n + add_machine(n - 1)
    

print (add_machine(6))
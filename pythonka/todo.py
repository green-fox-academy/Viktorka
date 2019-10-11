
helpie = """Command Line Todo application
=============================

Command line arguments:
    -l   Lists all the tasks
    -a   Adds a new task
    -r   Removes an task
    -c   Completes an task
    -ln  Gives you line number"""

answer = raw_input('What can I do for you: ')
checker = []

if answer == "-a":
    a_answ = raw_input('What task would you like to add to the list?: ')
    import csv
    # a as append below: instead of wb
    with open('todo.csv', 'a') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([a_answ])
elif answer == "-l":
    import csv
    with open('todo.csv', 'rb') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
          checker.append(str(row))
          try:
            print row[0]
          except:
            print 'no todo'
                
# elif answer == "-ln":
#     import csv
#     with open('todo.csv', 'U') as csvfile:

#!/usr/bin/python3

# function searches and replaces an element in a list
def search_replace(my_list, search, replace):
    new_list = list(map(lambda x: replace if x == search else x, my_list))
    return (new_list)

allPass :: [Bool] -> Bool

allPass ys = foldl1 (&&) ys



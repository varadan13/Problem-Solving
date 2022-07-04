isPresent :: Int -> [Int] -> Bool

isPresent x [] = False
isPresent x (y:ys) 
                | x==y = True
                | otherwise = isPresent x ys

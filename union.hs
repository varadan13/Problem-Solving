isPresent :: Int -> [Int] -> Bool

isPresent x [] = False
isPresent x (y:ys) 
                | x==y = True
                | otherwise = isPresent x ys

union' :: [Int] -> [Int] -> [Int]
union' xs [] = xs 
union' xs (y:ys)
            | isPresent y xs = union' xs y
            | otherwise = union' 

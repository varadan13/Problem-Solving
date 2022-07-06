upto :: [Int] -> (Int -> Bool) -> Int -> Int
upto xs f b = if final == [] then b else head final 
                where final = dropWhile f xs

test :: Int -> Int -> Bool
test = \n -> \i -> n `mod` i /= 0 

smallestPrime :: Int -> Int
smallestPrime n = upto [2..n] (test n) n

-- allPass :: [Int]->(Int -> Bool) -> Bool
-- 
-- allPass [] _ = True
-- allPass (y:ys) f
--                 | f y = allPass ys f
--                 | otherwise = False
-- 
removeEven :: [Int] -> [Int]
removeEven [] = []
removeEven (x:xs) 
                | even x = removeEven xs
                | otherwise = x:removeEven xs

toBoolean :: [Int] -> (Int -> Bool) -> [Bool]

toBoolean ys f = map f ys

g :: [Bool] -> Bool
g [] = True
g (y:ys)
        | y = g ys
        | otherwise = False

test :: Int -> Int -> Bool

test a b = a `mod` b == 0

ans = last (takeWhile (\x -> not (g (toBoolean (2 : (removeEven [2..20])) (test x) ))) [2..]) + 1


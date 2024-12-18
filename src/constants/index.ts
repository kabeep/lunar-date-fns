/* eslint-disable @typescript-eslint/naming-convention */
export const BASE_YEAR = 1900;
export const BASE_MONTH = 1;
export const BASE_DAY = 31;

export const MAXIMUM_YEAR = 2100;
export const MAXIMUM_LUNAR_YEAR = 2100;
export const MAXIMUM_LUNAR_MONTH = 12;
export const MAXIMUM_LUNAR_DAY = 1;

/**
 * 1900-2100 Hex
 * The high 12-digits of hexadecimal represent the number of days in each month of the lunar calendar,
 * and the low 4-digits represent leap month information.
 */
export const LUNAR_DATA = [
    0x0_4b_d8, // 1900
    0x0_4a_e0, // 1901
    0x0_a5_70, // 1902
    0x0_54_d5, // 1903
    0x0_d2_60, // 1904
    0x0_d9_50, // 1905
    0x1_65_54, // 1906
    0x0_56_a0, // 1907
    0x0_9a_d0, // 1908
    0x0_55_d2, // 1909
    0x0_4a_e0, // 1910
    0x0_a5_b6, // 1911
    0x0_a4_d0, // 1912
    0x0_d2_50, // 1913
    0x1_d2_55, // 1914
    0x0_b5_40, // 1915
    0x0_d6_a0, // 1916
    0x0_ad_a2, // 1917
    0x0_95_b0, // 1918
    0x1_49_77, // 1919
    0x0_49_70, // 1920
    0x0_a4_b0, // 1921
    0x0_b4_b5, // 1922
    0x0_6a_50, // 1923
    0x0_6d_40, // 1924
    0x1_ab_54, // 1925
    0x0_2b_60, // 1926
    0x0_95_70, // 1927
    0x0_52_f2, // 1928
    0x0_49_70, // 1929
    0x0_65_66, // 1930
    0x0_d4_a0, // 1931
    0x0_ea_50, // 1932
    0x0_6e_95, // 1933
    0x0_5a_d0, // 1934
    0x0_2b_60, // 1935
    0x1_86_e3, // 1936
    0x0_92_e0, // 1937
    0x1_c8_d7, // 1938
    0x0_c9_50, // 1939
    0x0_d4_a0, // 1940
    0x1_d8_a6, // 1941
    0x0_b5_50, // 1942
    0x0_56_a0, // 1943
    0x1_a5_b4, // 1944
    0x0_25_d0, // 1945
    0x0_92_d0, // 1946
    0x0_d2_b2, // 1947
    0x0_a9_50, // 1948
    0x0_b5_57, // 1949
    0x0_6c_a0, // 1950
    0x0_b5_50, // 1951
    0x1_53_55, // 1952
    0x0_4d_a0, // 1953
    0x0_a5_b0, // 1954
    0x1_45_73, // 1955
    0x0_52_b0, // 1956
    0x0_a9_a8, // 1957
    0x0_e9_50, // 1958
    0x0_6a_a0, // 1959
    0x0_ae_a6, // 1960
    0x0_ab_50, // 1961
    0x0_4b_60, // 1962
    0x0_aa_e4, // 1963
    0x0_a5_70, // 1964
    0x0_52_60, // 1965
    0x0_f2_63, // 1966
    0x0_d9_50, // 1967
    0x0_5b_57, // 1968
    0x0_56_a0, // 1969
    0x0_96_d0, // 1970
    0x0_4d_d5, // 1971
    0x0_4a_d0, // 1972
    0x0_a4_d0, // 1973
    0x0_d4_d4, // 1974
    0x0_d2_50, // 1975
    0x0_d5_58, // 1976
    0x0_b5_40, // 1977
    0x0_b6_a0, // 1978
    0x1_95_a6, // 1979
    0x0_95_b0, // 1980
    0x0_49_b0, // 1981
    0x0_a9_74, // 1982
    0x0_a4_b0, // 1983
    0x0_b2_7a, // 1984
    0x0_6a_50, // 1985
    0x0_6d_40, // 1986
    0x0_af_46, // 1987
    0x0_ab_60, // 1988
    0x0_95_70, // 1989
    0x0_4a_f5, // 1990
    0x0_49_70, // 1991
    0x0_64_b0, // 1992
    0x0_74_a3, // 1993
    0x0_ea_50, // 1994
    0x0_6b_58, // 1995
    0x0_55_c0, // 1996
    0x0_ab_60, // 1997
    0x0_96_d5, // 1998
    0x0_92_e0, // 1999
    0x0_c9_60, // 2000
    0x0_d9_54, // 2001
    0x0_d4_a0, // 2002
    0x0_da_50, // 2003
    0x0_75_52, // 2004
    0x0_56_a0, // 2005
    0x0_ab_b7, // 2006
    0x0_25_d0, // 2007
    0x0_92_d0, // 2008
    0x0_ca_b5, // 2009
    0x0_a9_50, // 2010
    0x0_b4_a0, // 2011
    0x0_ba_a4, // 2012
    0x0_ad_50, // 2013
    0x0_55_d9, // 2014
    0x0_4b_a0, // 2015
    0x0_a5_b0, // 2016
    0x1_51_76, // 2017
    0x0_52_b0, // 2018
    0x0_a9_30, // 2019
    0x0_79_54, // 2020
    0x0_6a_a0, // 2021
    0x0_ad_50, // 2022
    0x0_5b_52, // 2023
    0x0_4b_60, // 2024
    0x0_a6_e6, // 2025
    0x0_a4_e0, // 2026
    0x0_d2_60, // 2027
    0x0_ea_65, // 2028
    0x0_d5_30, // 2029
    0x0_5a_a0, // 2030
    0x0_76_a3, // 2031
    0x0_96_d0, // 2032
    0x0_4a_fb, // 2033
    0x0_4a_d0, // 2034
    0x0_a4_d0, // 2035
    0x1_d0_b6, // 2036
    0x0_d2_50, // 2037
    0x0_d5_20, // 2038
    0x0_dd_45, // 2039
    0x0_b5_a0, // 2040
    0x0_56_d0, // 2041
    0x0_55_b2, // 2042
    0x0_49_b0, // 2043
    0x0_a5_77, // 2044
    0x0_a4_b0, // 2045
    0x0_aa_50, // 2046
    0x1_b2_55, // 2047
    0x0_6d_20, // 2048
    0x0_ad_a0, // 2049
    0x1_4b_63, // 2050
    0x0_93_70, // 2051
    0x0_49_f8, // 2052
    0x0_49_70, // 2053
    0x0_64_b0, // 2054
    0x1_68_a6, // 2055
    0x0_ea_50, // 2056
    0x0_6b_20, // 2057
    0x1_a6_c4, // 2058
    0x0_aa_e0, // 2059
    0x0_a2_e0, // 2060
    0x0_d2_e3, // 2061
    0x0_c9_60, // 2062
    0x0_d5_57, // 2063
    0x0_d4_a0, // 2064
    0x0_da_50, // 2065
    0x0_5d_55, // 2066
    0x0_56_a0, // 2067
    0x0_a6_d0, // 2068
    0x0_55_d4, // 2069
    0x0_52_d0, // 2070
    0x0_a9_b8, // 2071
    0x0_a9_50, // 2072
    0x0_b4_a0, // 2073
    0x0_b6_a6, // 2074
    0x0_ad_50, // 2075
    0x0_55_a0, // 2076
    0x0_ab_a4, // 2077
    0x0_a5_b0, // 2078
    0x0_52_b0, // 2079
    0x0_b2_73, // 2080
    0x0_69_30, // 2081
    0x0_73_37, // 2082
    0x0_6a_a0, // 2083
    0x0_ad_50, // 2084
    0x1_4b_55, // 2085
    0x0_4b_60, // 2086
    0x0_a5_70, // 2087
    0x0_54_e4, // 2088
    0x0_d1_60, // 2089
    0x0_e9_68, // 2090
    0x0_d5_20, // 2091
    0x0_da_a0, // 2092
    0x1_6a_a6, // 2093
    0x0_56_d0, // 2094
    0x0_4a_e0, // 2095
    0x0_a9_d4, // 2096
    0x0_a2_d0, // 2097
    0x0_d1_50, // 2098
    0x0_f2_52, // 2099
    0x0_d5_20, // 2100
];
/* eslint-enable @typescript-eslint/naming-convention */

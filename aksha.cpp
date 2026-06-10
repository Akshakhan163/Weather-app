#include <bits/stdc++.h>
using namespace std;

int main() {
    // ---- FILE I/O LINES ----
    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif
    // ------------------------
   int n;
   cin >> n;
   char arr[n];
   int hash[26] = {0};
   for(int i = 0; i < n; i++) {
     cin >> arr[i];
   }
   for(int i = 0; i < n; i++) {
     hash[arr[i]-'a']++;
   }
   int q;
   cin >> q;
   for(int i = 0; i < q; i++) {
    char number;
    cin >> number;
    cout << hash[number - 'a']<<endl;
   }

    return 0;
}
import CompletedItem from "@/components/list/CompletedItem";
import ListHeroCard from "@/components/list/ListHeroCard";
import PendingItemCard from "@/components/list/PendingItemCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useGroceryStore } from "@/store/grocery-store";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListScreen() {
  const { items } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <TabScreenBackground />
      <FlatList
        className="flex-1"
        data={pendingItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PendingItemCard item={item} />}
        contentContainerStyle={{ padding: 20, gap: 14 }}
        ListHeaderComponent={
          <View style={{ gap: 14 }}>
            <ListHeroCard />
            <View className="flex-row items-center justify-between px-1">
              <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
                Shopping items
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={<CompletedItem />}
      />
    </SafeAreaView>
  );
}

//  <ScrollView
//    className="flex-1 bg-background my-4"
//    showsVerticalScrollIndicator={false}
//    contentContainerStyle={{ padding: 20, gap: 14 }}
//  >
//    <TabScreenBackground />
//    <ListHeroCard />

//    <View className="flex-row items-center justify-between px-1">
//      <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
//        Shopping items
//      </Text>
//      <Text className="text-sm text-muted-foreground">
//        {pendingItems.length} active
//      </Text>
//    </View>

//    {pendingItems.map((item) => (
//      <PendingItemCard key={item.id} item={item} />
//    ))}

//    <CompletedItem />
//  </ScrollView>;

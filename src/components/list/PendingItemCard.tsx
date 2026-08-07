import { GroceryItem, useGroceryStore } from "@/store/grocery-store";
import { Pressable, Text, View } from "react-native";

const priorityPillBg = {
  low: "bg-priority-low",
  medium: "bg-priority-medium",
  high: "bg-priority-high",
};

const priorityPillText = {
  low: "text-priority-low-foreground",
  medium: "text-priority-medium-foreground",
  high: "text-priority-high-foreground",
};

const PendingItemCard = ({ item }: { item: GroceryItem }) => {
  const { removeItem, updateQuantity, togglePurchased } = useGroceryStore();

  return (
    <View className="rounded-3xl border border-border bg-card p-4">
      <View className="flex-row items-start gap-3">
        <Pressable
          className="mt-1 size-6 h-6 w-6 items-center justify-center rounded-full border-2  border-border bg-card"
          onPress={() => togglePurchased(item.id)}
        ></Pressable>

        <View className="flex-1">
          <View className="flex-row items-center justify-between gap-2">
            <Text className="flex-1 text-lg font-semibold text-card-foreground">
              {item.name}
            </Text>
            <View
              className={`rounded-full px-3 py-1 ${priorityPillBg[item.priority]}`}
            >
              <Text
                className={`text-xs font-bold uppercase ${priorityPillText[item.priority]}`}
              >
                {item.priority}
              </Text>
            </View>
          </View>

          <View className="mt-2 flex-row items-center gap-2">
            <View className="rounded-full bg-secondary px-3 py-1">
              <Text className="text-xs font-semibold text-secondary-foreground">
                {item.category}
              </Text>
            </View>
          </View>

          <View className="mt-3 flex-row items-center gap-2">
            <Pressable
              className="mt-1 size-6 items-center justify-center rounded-full border-2 border-border bg-card"
              onPress={() => togglePurchased(item.id)}
            ></Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PendingItemCard;

/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/
enum TurnDir {
    //% block="右"
    Right = TurnDirection.Right,
    //% block="左"
    Left = TurnDirection.Left
}

enum SixDir {
    //% block="前"
    Front = SixDirection.Forward,
    //% block="うしろ"
    Back = SixDirection.Back,
    //% block="右"
    Right = SixDirection.Right,
    //% block="左"
    Left = SixDirection.Left,
    //% block="上"
    Up = SixDirection.Up,
    //% block="下"
    Down = SixDirection.Down
}

/**
 * Custom blocks
 */
//% block="ベーシック" weight=100 color=#FF4500 icon="\uf11b"
namespace easyBlock {
    /**
     * エージェントをプレイヤーのいる場所によぶ
     */
    //% group="エージェントをよぶ"
    //% block="エージェントをよぶ"
    //% weight=990
    export function agentTeleportToPlayer(): void {
        agent.teleportToPlayer()
    }

    /**
     * エージェントの向きを変える
     * @param dir エージェントの向き
     */
    //% group="エージェントをうごかす"
    //% block="%dir をむく"
    //% weight=890
    export function agentTurn(dir: TurnDir): void {
        agent.turn(dir)
    }

    /**
     * エージェントを移動させる
     * @param dir 進む方向
     * @param blocks 進むマス数
     */
    //% group="エージェントをうごかす"
    //% block="%dir に %blocks マス進む"
    //% blocks.defl=1
    //% weight=880
    export function agentMove(dir: SixDir, blocks: number): void {
        agent.move(dir, blocks)
    }

    /**
     * エージェントに攻撃させる
     * @param dir 攻撃する方向
     */
    //% group="エージェントをうごかす"
    //% block="%dir をこうげきする"
    //% blocks.defl=1
    //% weight=870
    export function agentAttack(dir: SixDir): void {
        agent.attack(dir)
    }

    /**
     * エージェントのスロットを有効化
     */
    //% group="エージェントがつくる"
    //% block="スロット %slot をつかう"
    //% slot.defl=1
    //% weight=790
    export function agentSetSlot(slot: number): void {
        agent.setSlot(slot)
    }

    /**
     * アイテムがなくなったら次のスロットを使う
     */
    //% group="エージェントがつくる"
    //% block="なくなったら次のスロットをつかう %on"
    //% on.defl=true
    //% on.shadow=toggleOnOff
    //% weight=780
    export function agentPlaceFromAnySlot(on: boolean): void {
        agent.setAssist(PLACE_FROM_ANY_SLOT, on)
    }

    /**
     * エージェントに置かせる
     * @param dir ブロックを置く向き
     */
    //% group="エージェントがつくる"
    //% block="%dir にブロックをおく"
    //% weight=770
    export function agentPlace(dir: SixDir): void {
        agent.place(dir)
    }

    /**
     * エージェントに壊させる
     * @param dir ブロックを壊す向き
     */
    //% group="エージェントがつくる"
    //% block="%dir のブロックをこわす"
    //% weight=760
    export function agentDestroy(dir: SixDir): void {
        agent.destroy(dir)
    }

    /**
     * エージェントがタワーを作る(20261010_builder用)
     * @param block つかうブロック
     * @param depth タテの長さ
     * @param width ヨコの長さ
     * @param height 高さ
     */
    //% group="エージェントがつくる"
    //% block="次のブロックで %block タテ %depth ヨコ %width たかさ %height のタワーをつくる"
    //% block.shadow="minecraftBlock"
    //% block.defl=Block.Grass
    //% depth.defl=3
    //% width.defl=3
    //% height.defl=3
    //% weight=750
    export function agentBuildTower(block: number, depth: number, width: number, height: number) {
        if (depth <= 1 || (width <= 1 || height <= 0)) {
            player.tell(mobs.target(LOCAL_PLAYER), "エラー：サイズが小さすぎます")
        } else {
            if (agent.getOrientation() == 90) {
                builder.face(WEST)
            } else if (agent.getOrientation() == -90) {
                builder.face(EAST)
            } else if (agent.getOrientation() == 0) {
                builder.face(SOUTH)
            } else {
                builder.face(NORTH)
            }
            for (let index = 0; index < height; index++) {
                builder.teleportTo(agent.getPosition())
                agent.move(UP, 1)
                for (let index = 0; index < 2; index++) {
                    for (let index = 0; index < depth - 1; index++) {
                        builder.place(block)
                        builder.move(FORWARD, 1)
                    }
                    builder.turn(RIGHT_TURN)
                    for (let index = 0; index < width - 1; index++) {
                        builder.place(block)
                        builder.move(FORWARD, 1)
                    }
                    builder.turn(RIGHT_TURN)
                }
            }
        }
    }

    /**
     * エージェントがユカを作る(20261010_builder用)
     * @param block つかうブロック
     * @param depth タテの長さ
     * @param width ヨコの長さ
     */
    //% group="エージェントがつくる"
    //% block="次のブロックで %block タテ %depth ヨコ %width のユカをつくる"
    //% block.shadow="minecraftBlock"
    //% block.defl=Block.Grass
    //% depth.defl=3
    //% width.defl=3
    //% weight=740
    export function agentBuildFloor(block: number, depth: number, width: number) {
        if (depth <= 0 || width <= 0) {
            player.tell(mobs.target(LOCAL_PLAYER), "エラー：サイズが小さすぎます")
        } else {
            if (agent.getOrientation() == 90) {
                builder.face(WEST)
            } else if (agent.getOrientation() == -90) {
                builder.face(EAST)
            } else if (agent.getOrientation() == 0) {
                builder.face(SOUTH)
            } else {
                builder.face(NORTH)
            }
            builder.teleportTo(agent.getPosition())
            agent.move(UP, 1)
            for (let index = 0; index < width; index++) {
                for (let index = 0; index < depth; index++) {
                    builder.place(block)
                    builder.move(FORWARD, 1)
                }
                builder.move(BACK, depth)
                builder.move(RIGHT, 1)
            }
        }
    }

    /**
     * エージェントが落とす
     */
    //% group="エージェントのもちもの"
    //% block="ブロックを %quantity コ おとす"
    //% quantity.defl=1
    //% weight=690
    export function agentDrop(quantity: number): void {
        agent.drop(SixDir.Front, 1, quantity)
    }

    /**
     * エージェントが拾う
     */
    //% group="エージェントのもちもの"
    //% block="おちているブロックをひろう"
    //% weight=680
    export function agentCollect(): void {
        agent.collectAll()
    }

    /**
     * エージェントのとなりのマスにブロックがあるか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir にブロックがある"
    //% weight=590
    export function agentDetectBlock(dir: SixDir): boolean {
        return agent.detect(AgentDetection.Block, dir)
    }

    /**
     * エージェントのとなりのマスにブロックがないか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir にブロックがない"
    //% weight=580
    export function agentDetectBlockNegate(dir: SixDir): boolean {
        return !agent.detect(AgentDetection.Block, dir)
    }

    /**
     * エージェントのとなりのマスに特定のブロックがあるか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir に %block がある"
    //% block.shadow="minecraftBlock"
    //% block.defl=Block.Grass
    //% weight=570
    export function agentDetectSpecificBlock(dir: SixDir, block: number): boolean {
        let result: boolean = false;
        if (agent.inspectBlock(dir) == block) {
            result = true;
        }
        return result;
    }

    /**
     * エージェントのとなりのマスに特定のブロックがないか確かめる
     * @param dir 確かめる方向
     */
    //% group="エージェントがたしかめる"
    //% block="%dir に %block がない"
    //% block.shadow="minecraftBlock"
    //% block.defl=Block.Grass
    //% weight=560
    export function agentDetectSpecificBlockNegate(dir: SixDir, block: number): boolean {
        let result: boolean = false;
        if (agent.inspectBlock(dir) == block) {
            result = true;
        }
        return !result;
    }

    /**
     * エージェントを待機させる
     * @param seconds 秒数
     */
    //% group="エージェントをせいぎょする"
    //% block="%seconds 秒まつ"
    //% seconds.defl=1
    //% weight=490
    export function agentWait(seconds: number): void {
        let ms: number = seconds * 1000;
        loops.pause(ms)
    }
}

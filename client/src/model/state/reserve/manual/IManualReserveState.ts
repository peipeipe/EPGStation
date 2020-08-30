import * as apid from '../../../../../../api';

export interface ProgramStateData {
    display: {
        channelName: string;
        name: string;
        day: string;
        dow: string;
        startTime: string;
        endTime: string;
        duration: number;
        genres: string[];
        description?: string;
        extended?: string;
        videoType?: string;
        audioType?: string;
        audioSamplingRate?: string;
        isFree: boolean;
    };
    programItem: apid.ScheduleProgramItem;
}

/**
 * 予約オプション
 */
export interface ManualReserveOption {
    allowEndLack: boolean; // 末尾切れを許可するか
}

/**
 * 保存オプション
 */
export interface ManualSaveOption {
    parentDirectoryName: string | null; // 親保存ディレクトリ
    directory: string | null; // 保存ディレクトリ
    recordedFormat: string | null; // ファイル名フォーマット
}

/**
 * エンコードオプション
 */
export interface EncodedOption {
    mode1: string | null; // エンコードモード
    encodeParentDirectoryName1: string | null; // 親保存ディレクトリ
    directory1: string | null; // 保存先ディレクトリ
    mode2: string | null;
    encodeParentDirectoryName2: string | null;
    directory2: string | null;
    mode3: string | null;
    encodeParentDirectoryName3: string | null;
    directory3: string | null;
    isDeleteOriginalAfterEncode: boolean; // エンコード後に元ファイルを自動削除するか
}

export default interface IManualReserveState {
    isTimeSpecification: boolean;
    reserveOption: ManualReserveOption;
    saveOption: ManualSaveOption;
    encodeOption: EncodedOption;
    optionPanel: number[];
    init(): void;
    setOptions(reserveItem: apid.ReserveItem): void;
    fetchProgramInfo(programId: apid.ProgramId, isHalfWidth: boolean): Promise<void>;
    getReserveItem(reserveId: apid.ReserveId, isHalfWidth: boolean): Promise<apid.ReserveItem>;
    getProgramInfo(): ProgramStateData | null;
    getPrentDirectoryItems(): string[];
    getEncodeModeItems(): string[];
    isEnableEncodeMode(): boolean;
    addReserve(): Promise<void>;
    updateReserve(): Promise<void>;
}
